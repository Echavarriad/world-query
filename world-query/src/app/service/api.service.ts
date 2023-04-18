import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { countrieI } from '../model/countries/countries.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://www.universal-tutorial.com/api/countries/';
  countris: any;
  constructor(private http: HttpClient) {}
  getcountris():Observable<countrieI[]>{
    return this.http.get<countrieI[]>(this.url);
  }

}
