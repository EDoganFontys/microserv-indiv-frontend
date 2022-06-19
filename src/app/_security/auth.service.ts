import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Register} from "../classes/register";
const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: any;

  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.api_url}`; }//de eerste apiurl is voor authentication.

  Login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/login', {
      username,
      password
    }, httpOptions);
  }
  public Register(user: Register): Observable<Register> {
    return this.http.post<Register>(this.apiUrl + '/register', user);
  }
}
