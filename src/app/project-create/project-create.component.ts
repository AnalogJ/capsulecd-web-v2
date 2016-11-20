import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppSettings } from '../app-settings'
import {Organization} from "../models/organization";
import {Repository} from "../models/repository";
import {Router} from '@angular/router'

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {
  orgs: Organization[] = [];
  orgRepos: Repository[] = []
  orgReposPage: number = 1;
  orgReposAll: boolean = false;
  selectedOrgIndex: number = 0;
  loading = {
    fetchOrgs: true,
    fetchOrgRepos: false,
    createProject: false
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.fetchOrgs()
        .subscribe(
            data => {
              console.log(data)
              this.orgs = data;
              this.selectedOrgIndex = 0
              this.fetchSelectedOrgRepos()
            },
            error => console.log(error),
            () => this.loading.fetchOrgs = false
        );

  }

  resetPagination(){
    this.orgReposPage = 1; //this is the starting page when retriving repos from the api
    this.orgReposAll = false;  // this deterimes if all repos for the selected Org have been retrived from Github
    this.loading.fetchOrgRepos = false //this specifies if there is currently a repo request in progress.
  }

  fetchSelectedOrgRepos(){

    this.resetPagination()
    this.loading.fetchOrgRepos = true;
    this.apiService.fetchOrgRepos(this.orgs[this.selectedOrgIndex].login, this.orgReposPage)
        .subscribe(
            data => {
              console.log(data)
              this.orgRepos = data;
            },
            error => console.log(error),
            () => this.loading.fetchOrgRepos = false
        );
  }

  fetchSelectedOrgReposNextPage(){
    if(this.loading.fetchOrgRepos) return;
    if(this.orgReposAll) return;

    this.loading.fetchOrgRepos = true;
    this.orgReposPage += 1;
    this.apiService.fetchOrgRepos(this.orgs[this.selectedOrgIndex].login, this.orgReposPage)
        .subscribe(
            data => {
              console.log(data)
              if(data.length == 0){
                this.orgReposAll = true;
              }
              else{
                this.orgRepos = this.orgRepos.concat(data);
              }
            },
            error => console.log(error),
            () => this.loading.fetchOrgRepos = false
        );

  }


  selectNextOrg(nextIndex){
    this.selectedOrgIndex = (nextIndex % (this.orgs.length -1))
    this.fetchSelectedOrgRepos()
  }
  selectPrevOrg(prevIndex){
    if(prevIndex<0){
      this.selectedOrgIndex = this.orgs.length -1
    }
    else{
      this.selectedOrgIndex = prevIndex
    }
    this.fetchSelectedOrgRepos()
  }

    createProject(orgId, repoId){
        this.loading.createProject = true
        this.apiService.createProject(orgId, repoId)

            .subscribe(
                data => {
                    console.log(data)
                    this.router.navigate([`/project/${this.apiService.serviceType()}/${orgId}/${repoId}/edit`])

                },
                error => console.log(error),
                () => this.loading.createProject = false
            );
    }

}
