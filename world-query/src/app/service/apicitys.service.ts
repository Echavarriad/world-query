import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { cityI } from '../model/citys/citys.module';

@Injectable({
  providedIn: 'root',
})
export class ApicitysService {
  citys: any;
  constructor(private http: HttpClient) {}
  getcity(city_name: any): Observable<cityI[]> {
    let url = 'https://www.universal-tutorial.com/api/cities/' + city_name;
    return this.http.get<cityI[]>(url);
  }
}
