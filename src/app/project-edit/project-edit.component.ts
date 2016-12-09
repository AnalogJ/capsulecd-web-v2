import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppSettings } from '../app-settings'
import { Observable }     from 'rxjs/Observable';
import {Alert} from '../models/alert'

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

  alerts: Alert[] = [];
  loading = {
    project: true,
    saveSettings: false,
    addSecret: false,
    queryDockerImages: false
  }
  dockerImagesDatasource:Observable<any>;
  dockerImagesNoResults: boolean = false;

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
            error => this.alerts.push(new Alert('Error retrieving project', error.message)),
            () => this.loading.project = false
        );

    this.dockerImagesDatasource = Observable.create((observer:any) => {
        // Runs on every search
        observer.next(this.projectData.dockerImage);
    }).mergeMap((token:string) => this.apiService.fetchDockerImage(token));
  }

  //TODO: add method to autocomplete docker image lookup
  //TODO: add help text with common secrets for each image/package type
  //TODO: add delete method for secrets.
  closeAlert(i:number):void {
    this.alerts.splice(i, 1);
  }

  packageTypeChanged(){
    this.projectData.dockerImage = this.defaultSettings[this.projectData.packageType].image
  }

    dockerImagesLoading(e:boolean){
        this.loading.queryDockerImages = e;
    }
    dockerImagesNoResultsHandler(e:boolean):void {
        this.dockerImagesNoResults = e;
    }

  saveSettings(){
    var payload = {
      "Settings": this.projectData
    };
    this.loading.saveSettings = true
    this.apiService.editProject(this.orgId, this.repoId, payload)
        .subscribe(
            data => {
              console.log(data)
            },
            error => this.alerts.push(new Alert('Error updating project', error.message)),
            () =>  this.loading.saveSettings = false
        );
  }

  addSecret(){
    var payload = {
      "Secrets": {}
    };
    payload.Secrets[this.secretName] = this.secretValue;
    this.loading.addSecret = true;
    this.apiService.editProject(this.orgId, this.repoId, payload)
        .subscribe(
            data => {
              this.projectSecrets[this.secretName] = (this.secretValue.length > 4) ? this.secretValue.substr(this.secretValue.length - 4) : this.secretValue.substr(this.secretValue.length - 2)
              this.projectSecretsKeys = Object.keys(this.projectSecrets)
              this.secretName = '';
              this.secretValue = '';
            },
            error => this.alerts.push(new Alert('Error updating project secrets', error.message)),
            () =>  this.loading.addSecret = false
        );
  }

}
