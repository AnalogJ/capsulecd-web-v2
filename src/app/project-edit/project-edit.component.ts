import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AppSettings } from '../app-settings'

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  repoId: string;
  orgId: string;
  projectData: any = {};
  projectSecrets: any = {};
  projectSecretsKeys: any = []

  defaultSettings = AppSettings.DOCKER_IMAGES;
  defaultSettingsKeys = Object.keys(this.defaultSettings)

  secretName: string = '';
  secretValue: string = '';

  loading = {
    project: true,
    saveSettings: false,
    addSecret: false
  }


  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
    this.orgId = this.activatedRoute.snapshot.params['orgId'];
    this.apiService.getProject(this.orgId, this.repoId)
        .subscribe(
            data => {
              console.log(data)
              this.projectData = data.Settings || this.projectData;
              this.projectSecrets = data.Secrets || this.projectSecrets;
              this.projectSecretsKeys = Object.keys(this.projectSecrets)
            },
            error => console.log(error),
            () => this.loading.project = false
        );
  }

  //TODO: add method to autocomplete docker image lookup
  //TODO: add help text with common secrets for each image/package type
  //TODO: add delete method for secrets.

  packageTypeChanged = function(){
    this.projectData.dockerImage = this.defaultSettings[this.projectData.packageType].image
  }



  saveSettings(){
    var payload = {
      "Settings": this.projectData
    };
    this.loading.saveSettings = true
    return this.apiService.editProject(this.orgId, this.repoId, payload)
        .subscribe(
            data => {
              console.log(data)
            },
            error => console.log(error),
            () =>  this.loading.saveSettings = false
        );
  }

  addSecret(){
    var payload = {
      "Secrets": {}
    };
    payload.Secrets[this.secretName] = this.secretValue;
    this.loading.addSecret = true;
    return this.apiService.editProject(this.orgId, this.repoId, payload)
        .subscribe(
            data => {
              this.projectSecrets[this.secretName] = (this.secretValue.length > 4) ? this.secretValue.substr(this.secretValue.length - 4) : this.secretValue.substr(this.secretValue.length - 2)
              this.projectSecretsKeys = Object.keys(this.projectSecrets)
              this.secretName = '';
              this.secretValue = '';
            },
            error => console.log(error),
            () =>  this.loading.addSecret = false
        );
  }

}
