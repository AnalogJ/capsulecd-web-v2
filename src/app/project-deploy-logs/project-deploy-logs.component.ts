import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Alert} from '../models/alert'
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";
import {ContainerState} from '../models/container-state'
@Component({
  selector: 'app-project-deploy-logs',
  templateUrl: './project-deploy-logs.component.html',
  styleUrls: ['./project-deploy-logs.component.css']
})
export class ProjectDeployLogsComponent implements OnInit {
  repoId: string;
  orgId: string;
  prNumber: number;
  projectData: any = {};
  pullRequest: any = {};
  logs: Array<any> = [];

  alerts: Alert[] = [];
  loading = {
    logs: true,
    project: true,
    pullRequest: true
  };
  firstRequest: boolean = true;

  logSubscription: Subscription;
  containerState: ContainerState = new ContainerState();


  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
    this.orgId = this.activatedRoute.snapshot.params['orgId'];
    this.prNumber = this.activatedRoute.snapshot.params['prNumber'];

    let timer = TimerObservable.create(0, 3000); //start at 0ms and re-run every 3 seconds (3000ms)
    this.logSubscription = timer.subscribe(t => {
      this.apiService.getPublishLogs(this.orgId, this.repoId, this.prNumber, (this.firstRequest? 0 : Math.round(Date.now()/1000))) //we need to send timestamp in milliseconds, not seconds.
          .subscribe(
              data => {
                  this.containerState = data.State;
                if(!data.Lines || data.Lines.length == 0){
                    this.logSubscription.unsubscribe();
                }
                else{
                    this.logs = this.logs.concat(data.Lines);
                }
              },
              error => {
                this.alerts.push(new Alert('Error retrieving project', error.message))
                this.logSubscription.unsubscribe();
              },
              () => {
                  this.loading.logs = false;
                  this.firstRequest = false;
              }

          );
    });


    this.apiService.getProject(this.orgId, this.repoId)
        .subscribe(
            data => {
              console.log(data)
              this.projectData = data.Settings || this.projectData;
            },
            error => this.alerts.push(new Alert('Error retrieving project', error.message)),
            () => this.loading.project = false
        );

    this.apiService.fetchOrgRepoPullRequest(this.orgId, this.repoId, this.prNumber)
        .subscribe(
            data => {
              console.log(data)
              this.pullRequest = data
            },
            error => this.alerts.push(new Alert('Error retrieving pull request', error.message)),
            () => this.loading.pullRequest = false
        );
  }
  ngOnDestroy() {
    this.logSubscription.unsubscribe();
  }

  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }


}
