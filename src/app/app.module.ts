import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

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
import { provideAuth } from 'angular2-jwt';
import {MomentModule} from 'angular2-moment';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
    MomentModule,
    InfiniteScrollModule,
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
  providers: [
    ApiService,
    CacheService,
    AuthGuard,
    provideAuth({
      globalHeaders: [{'Content-Type':'application/json'}]
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
