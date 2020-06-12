import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl: string;
  public rut: string;

  constructor(private HTTP: HttpClient) {
    this.apiUrl = 'http://localhost:8082/';
    // this.apiUrl = 'http://127.0.0.1:8000/api/';
    this.rut = '';
  }

  getService(rut: string, token: string) {
    this.rut = rut;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
      Accept: 'application/json'
    });
    return this.HTTP.get(`${this.apiUrl}${this.rut}`, {headers});
  }

  postService(rut: string, token: string, model: any): any {
    this.rut = rut;
    const authData = {
      ...model
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
      Accept: 'application/json'
    });
    return this.HTTP.post(`${this.apiUrl}${this.rut}`, authData, {headers,  observe: 'response'});
  }

  putService(rut: string, token: string, model: any) {
    this.rut = rut;
    const authData = {
      ...model
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
      Accept: 'application/json'
    });
    return this.HTTP.put(`${this.apiUrl}${this.rut}`, authData, {headers,  observe: 'response'});
  }

  deleteService(rut: string, token: string) {
    this.rut = rut;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token,
      Accept: 'application/json'
    });
    return this.HTTP.delete(`${this.apiUrl}${this.rut}`, {headers,  observe: 'response'});
  }


}
