import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeployComponent } from './project-deploy/project-deploy.component';
import { AuthConnectComponent } from './auth-connect/auth-connect.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';


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
      { path: 'dashboard', component: DashboardComponent },
      { path: 'project/create', component: ProjectCreateComponent },
      { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent },
      { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent },
      { path: 'auth/connect', component: AuthConnectComponent },
      { path: 'auth/callback', component: AuthCallbackComponent },
      { path: '', pathMatch: 'full', redirectTo: '/' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'auth/connect' }
    ])
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
