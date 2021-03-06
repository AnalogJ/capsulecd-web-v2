import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './partials/footer/footer.component';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectDeployComponent } from './project-deploy/project-deploy.component';
import { AuthConnectComponent } from './auth-connect/auth-connect.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';

import { ApiService } from './services/api.service'
import { CacheService } from './services/cache.service'
import { AuthGuard } from './services/auth-guard.service'
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {MomentModule} from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { ProjectDeployLogsComponent } from './project-deploy-logs/project-deploy-logs.component';




export function getAuthHttp(http: any) {
  return new AuthHttp(new AuthConfig({
    noJwtError: true,
    headerPrefix: 'JWT',
    tokenGetter: (() => localStorage.getItem('id_token')),
    globalHeaders: [{'Content-Type':'application/json'}]
  }), http);
}



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DashboardComponent,
    ProjectCreateComponent,
    ProjectEditComponent,
    ProjectDeployComponent,
    AuthConnectComponent,
    AuthCallbackComponent,
    ProjectDeployLogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MomentModule,
    InfiniteScrollModule,

    Ng2BootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: AuthConnectComponent },
      { path: 'auth/connect', component: AuthConnectComponent },
      { path: 'auth/callback/:serviceType', component: AuthCallbackComponent },


      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'project/create', component: ProjectCreateComponent, canActivate: [AuthGuard] },
      { path: 'project/:serviceType/:orgId/:repoId/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
      { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber', component: ProjectDeployComponent, canActivate: [AuthGuard] },
      { path: 'project/:serviceType/:orgId/:repoId/pullrequests/:prNumber/logs', component: ProjectDeployLogsComponent, canActivate: [AuthGuard] },

      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      // { path: '**', component: PageNotFoundComponent }
      { path: '**', redirectTo: 'login' }
    ])
  ],
  providers: [
    ApiService,
    CacheService,
    AuthGuard,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
