import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { ApiService } from 'src/app/service/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,Validator } from '@angular/forms';
import { ApistateService } from 'src/app/service/apistate.service';
import { ApicitysService } from 'src/app/service/apicitys.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  //@ViewChild('ascountri') countri: ElementRef;

  countriC = new FormGroup({
    country_name: new FormControl(''),
  });
  constructor(
    private http: HttpClient,
    public api: ApiService,
    public apistate: ApistateService,
    public apicitys: ApicitysService,
    private render2: Renderer2
  ) {}
  ngOnInit(): void {
    this.obtenerPaises();
  }
  capture(countri: any) {
    console.log(this.countriC.value.country_name);
  }
  obtenerPaises() {
    let response = this.api.getcountris();
    response.subscribe((res: any) => {
      this.api.countris = res;
    });
  }
  obtenerestados(deviceValue: any) {
    let response = this.apistate.getstates(deviceValue.value);
    response.subscribe((res: any) => {
      this.apistate.states = res;
    });
  }

  obtenerciudad(deviceValue: any) {
    let response = this.apicitys.getcity(deviceValue.value);
    response.subscribe((res: any) => {
      this.apicitys.citys = res;
    });
  }

  /* obtenerPaises() {
    fetch('https://www.universal-tutorial.com/api/countries/', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkdXZhbkBnbWFpbC5jb20iLCJhcGlfdG9rZW4iOiJrZ195dmZwZmRCbGpPQlJWN1lVejRsRnRfcnlTZWQyamF4bzdmM201U2dFUTRIWU5ocDk3Q2JLdUc1NHVYc0wwSXVBIn0sImV4cCI6MTY4MTg3NjI1NX0.BCYzZL4R6g84nSKiQ8-fHlUGRxYp18gjt6NjUuvyVYg',
        Accept: 'application/json',
      },
    }).then(res => res.json())
      .then(json => console.log(JSON.stringify(json)));
  } */
}
