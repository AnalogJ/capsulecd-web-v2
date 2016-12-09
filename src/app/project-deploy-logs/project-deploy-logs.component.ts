import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Alert} from '../models/alert'

@Component({
  selector: 'app-project-deploy-logs',
  templateUrl: './project-deploy-logs.component.html',
  styleUrls: ['./project-deploy-logs.component.css']
})
export class ProjectDeployLogsComponent implements OnInit {
  repoId: string;
  orgId: string;
  prNumber: number;
  alerts: Alert[] = [];
  loading = true

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
    this.orgId = this.activatedRoute.snapshot.params['orgId'];
    this.prNumber = this.activatedRoute.snapshot.params['prNumber'];

    this.apiService.getSignedLogUrl(this.orgId, this.repoId, this.prNumber)
        .flatMap((data) => this.apiService.getDeployLogs(data.url, data.signedHeaders))
        .subscribe(
            data => {
              console.log(data)

            },
            error => this.alerts.push(new Alert('Error retrieving project', error.message)),
            () => this.loading = false
        );

  }
  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

}
