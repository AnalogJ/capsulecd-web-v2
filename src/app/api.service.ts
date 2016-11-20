import { Injectable } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {AppSettings} from './app-settings';
import { CookieService } from 'angular2-cookie/core';
import {Project} from './models/project'
@Injectable()
export class ApiService {

  constructor(public authHttp: AuthHttp, private http: Http, private cookieService: CookieService) { }

  //Helper functions
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }

  // Unauthenticated functions

  loggedIn() {
    return tokenNotExpired();
  }
  serviceType(){
    return this.cookieService.get('CAPSULECD_SERVICE_TYPE')
  }

  authConnect(serviceType): Observable<any> {
    return this.http.get(`${AppSettings.API_ENDPOINT}/connect/${serviceType}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  authCallback(serviceType, queryParams): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();

    for(var [key, value] of queryParams){
      params.set(key, value)
    };

    return this.http.get(`${AppSettings.API_ENDPOINT}/callback/${serviceType}`, {
      search: params
    })
        .map(this.extractData)
        .catch(this.handleError);
  }


  // Authenticated functions

  getProjects(): Observable<any> {
    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/project`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  getProject(orgId:string, repoId:string): Observable<any> {
    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/project/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/${orgId}/${repoId}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  createProject(orgId:string, repoId:string){
    return this.authHttp.post(`${AppSettings.API_ENDPOINT}/project/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/${orgId}/${repoId}`, {})
        .map(this.extractData)
        .catch(this.handleError);
  }
  editProject(orgId:string, repoId:string, payload: any): Observable<any> {
    return this.authHttp.put(`${AppSettings.API_ENDPOINT}/project/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/${orgId}/${repoId}`, payload)
        .map(this.extractData)
        .catch(this.handleError);
  }

  fetchOrgs(page?:number): Observable<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', (page || 0).toString())

    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/fetch/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/orgs`,{
      search: params
    })
        .map(this.extractData)
        .catch(this.handleError);
  }

  fetchOrgRepos(orgId:string, page?:number): Observable<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', (page || 0).toString())

    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/fetch/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/orgs/${orgId}/repos`,{
      search: params
    })
        .map(this.extractData)
        .catch(this.handleError);
  }

  fetchOrgRepoPullRequests(orgId:string, repoId:string, page?:number): Observable<any>{
    let params: URLSearchParams = new URLSearchParams();
    params.set('page', (page || 0).toString())

    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/fetch/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/orgs/${orgId}/repos/${repoId}/pullrequests`,{
      search: params
    })
        .map(this.extractData)
        .catch(this.handleError);
  }

  fetchOrgRepoPullRequest(orgId:string, repoId:string, prNumber:number): Observable<any>{

    return this.authHttp.get(`${AppSettings.API_ENDPOINT}/fetch/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/orgs/${orgId}/repos/${repoId}/pullrequests/${prNumber}`)
        .map(this.extractData)
        .catch(this.handleError);
  }

  deployProject(orgId:string, repoId:string, prNumber:number, settings?: any): Observable<any>{
    return this.authHttp.post(`${AppSettings.API_ENDPOINT}/process/${this.cookieService.get('CAPSULECD_SERVICE_TYPE')}/${orgId}/${repoId}/${prNumber}`, settings || {})
        .map(this.extractData)
        .catch(this.handleError);
  }

}
