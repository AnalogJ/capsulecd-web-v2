import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ng2-bootstrap';
import {Router} from '@angular/router'

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.css']
})
export class AuthCallbackComponent implements AfterViewInit {
  @ViewChild('childModal') public childModal:ModalDirective;

  successfulCallback = true;

  constructor(private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngAfterViewInit() {
    this.childModal.show();

    // process the query string for the code
    console.log('GETTING QUERY STRING PARAMS');
    console.log(this.activatedRoute.snapshot.params);
    console.log(this.activatedRoute.snapshot.queryParams);

    this.apiService.authCallback(this.activatedRoute.snapshot.params['serviceType'], this.activatedRoute.snapshot.queryParams)
        .subscribe(
            data => {
              console.log(data);
              localStorage.setItem('id_token', data.token); //set the JWT token
              localStorage.setItem('service_type', data.service_type);

              this.router.navigate(['/dashboard'])
            },
            error => console.log(error)
        );

  }

}
