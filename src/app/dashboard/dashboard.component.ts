import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project'
import { ApiService } from '../services/api.service';
import {Alert} from '../models/alert'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = {
      projects: true,
      pullrequests: {}
  }
  projects: Project[] = [];
  selectedProject: Project = new Project();
  projectPullRequests = []
  alerts: Alert[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProjects().subscribe(
        data => {
          console.log(data);
          this.projects = data;
          this.selectedProject = this.projects[0]
          this.getProjectPullRequests()
        },
        error => this.alerts.push(new Alert('Error retrieving projects', error.message)),
        () => this.loading.projects = false
    )
  }

  private getProjectPullRequests(){
    this.loading.pullrequests[this.selectedProject.RepoId] = true
    this.apiService.fetchOrgRepoPullRequests(this.selectedProject.OrgId, this.selectedProject.RepoId).subscribe(
        data => {
            console.log(data);
            this.projectPullRequests = data;
        },
        error => this.alerts.push(new Alert('Error retrieving pull requests', error.message)),
        () => this.loading.pullrequests[this.selectedProject.RepoId] = false
    )
  }
  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  showProject(project:Project){
      this.selectedProject = project;
      this.getProjectPullRequests()
  }




}
