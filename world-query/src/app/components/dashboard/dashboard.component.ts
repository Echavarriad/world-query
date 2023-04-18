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
  @ViewChild('asname') name: ElementRef | undefined;

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

  text(event:any) {
    const asname = this.name?.nativeElement;
    let key = event.keyCode;
    if (
      (event.keyCode > 47 && event.keyCode < 58) ||
      (event.keyCode > 95 && event.keyCode < 112)
    ) {
      asname.value = '';
      alert('Solo se permiten letras');
    } else {

    }


  }
  /* obtenerPaises() {
    fetch('https://restcountries.com/v3.1/all', {
    }).then(res => res.json())
      .then(json => console.log(JSON.stringify(json)));
  } */
}
