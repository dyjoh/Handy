import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import {HttpClient, HttpParams} from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'http://localhost:3000/'

  constructor(private _http: HttpClient) { }

  getTypeRequest(url: string){
   

    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
      }));
  }

  getTypeRequestWithPayload(url: string, payload: any){
    const keyParam = "search"
    var value = "";
    Object.keys(payload).forEach(key => {
      if (payload[key].search) {
          value = payload[key];
      }
  });    const params = new HttpParams()
    .set(keyParam, value)
    return this._http.get<Object[]>(`${this.baseUrl}${url}`, {params}).pipe(map(res => {
      return res;
      }));
  }

  postTypeRequest(url: string, payload: any){
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
      }));
  }

  putTypeRequest(url: string, payload: any) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
    return res;
    }));
  }
}
