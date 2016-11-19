import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-project-deploy',
  templateUrl: './project-deploy.component.html',
  styleUrls: ['./project-deploy.component.css']
})
export class ProjectDeployComponent implements OnInit {
  repoId: string;
  orgId: string;
  prNumber: number;
  projectData: any = {};
  projectSecrets: any = {};
  pullRequest: any = {};

  loading = {
    project: true,
    pullRequest: true,
    createRelease: false
  }

  versionIncr: string = 'patch';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
    this.orgId = this.activatedRoute.snapshot.params['orgId'];
    this.prNumber = this.activatedRoute.snapshot.params['prNumber'];
    this.apiService.getProject(this.orgId, this.repoId)
        .subscribe(
            data => {
              console.log(data)
              this.projectData = data.Settings || this.projectData;
              this.projectSecrets = data.Secrets || this.projectSecrets;
              this.versionIncr = this.projectData.versionIncr || this.versionIncr

            },
            error => console.log(error),
            () => this.loading.project = false
        );

    this.apiService.fetchOrgRepoPullRequest(this.orgId, this.repoId, this.prNumber)
        .subscribe(
            data => {
              console.log(data)
              this.pullRequest = data
            },
            error => console.log(error),
            () => this.loading.pullRequest = false
        );
  }

  createRelease(){
    //TODO: this function should also send version increment & custom changelog.
    this.loading.createRelease = true;
    this.apiService.deployProject(this.orgId, this.repoId, this.prNumber)
        .subscribe(
            data => {
              console.log(data)
              //todo change path.
            },
            error => console.log(error),
            () => this.loading.createRelease = false
        );
  }

}
