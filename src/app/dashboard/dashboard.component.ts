import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project'
import { ApiService } from '../api.service';

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


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getProjects().subscribe(
        data => {
          console.log(data);
          this.projects = data;
          this.selectedProject = this.projects[0]
          this.getProjectPullRequests()
        },
        error => console.log(error),
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
        error => console.log(error),
        () => this.loading.pullrequests[this.selectedProject.RepoId] = false
    )
  }

  showProject(project:Project){
      this.selectedProject = project;
      this.getProjectPullRequests()
  }




}
