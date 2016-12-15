import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Alert} from '../models/alert'
import {TimerObservable} from "rxjs/observable/TimerObservable";
import {Subscription} from "rxjs";

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
  logsubscription: Subscription;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
    this.orgId = this.activatedRoute.snapshot.params['orgId'];
    this.prNumber = this.activatedRoute.snapshot.params['prNumber'];

    // let timer = TimerObservable.create(0, 1000); //start at 0ms and re-run every second (1000ms)
    // this.logsubscription = timer.subscribe(t => {
    // console.log("TICKS", t)
      this.apiService.getDeployLogs(this.orgId, this.repoId, this.prNumber)
          .subscribe(
              log_lines => {

                this.logs = log_lines
              },
              error => {
                this.alerts.push(new Alert('Error retrieving project', error.message))
                this.logsubscription.unsubscribe();
              },
              () => this.loading.logs = false

          );
    // });


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
    this.logsubscription.unsubscribe();
  }

  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }


}
