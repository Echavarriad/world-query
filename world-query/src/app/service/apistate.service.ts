import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { statesI } from '../model/states/states.module';
@Injectable({
  providedIn: 'root',
})
export class ApistateService {

  states: any;
  constructor(private http: HttpClient) {}
  getstates(state_name: any): Observable<statesI[]> {
    let url = 'https://www.universal-tutorial.com/api/states/' + state_name;
    return this.http.get<statesI[]>(url);

  }
}
