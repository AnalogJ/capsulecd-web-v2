import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';

import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-auth-connect',
  templateUrl: './auth-connect.component.html',
  styleUrls: ['./auth-connect.component.css']
})
export class AuthConnectComponent implements AfterViewInit {
  @ViewChild('childModal') public childModal:ModalDirective;

  loading = {
    github: false,
    bitbucket: false
  };

  constructor(private apiService: ApiService) { }

  ngAfterViewInit() {
    this.childModal.show()
  }

  loginWith(serviceType){
    console.log(serviceType);
    this.loading[serviceType] = true;

    this.apiService.authConnect(serviceType)
        .subscribe(
            data => {
              console.log(data);
              window.location.href = data.url
            },
            error => console.log(error),
            () => this.loading[serviceType] = false
        )
  }
}
