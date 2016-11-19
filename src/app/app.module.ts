import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeployComponent } from './project-deploy/project-deploy.component';
import { AuthConnectComponent } from './auth-connect/auth-connect.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { ApiService } from './api.service'
import { AuthGuard } from './auth-guard.service'
import {  provideAuth } from 'angular2-jwt';
import { CookieService } from 'angular2-cookie/services/cookies.service';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDeployComponent,
    AuthConnectComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    RouterModule.forRoot([
      { path: 'login', component: AuthConnectComponent },
      { path: 'auth/connect', component: AuthConnectComponent },
      { path: 'auth/callback/:serviceType', component: AuthCallbackComponent },


      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [ApiService, provideAuth({
    globalHeaders: [{'Content-Type':'application/json'}]
  }), CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
