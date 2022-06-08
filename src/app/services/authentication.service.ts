import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {Register} from "../classes/register";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly url: any;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_url}`;
  }

  public Login(username: string, password: string): any {
    return this.http.post<any>(this.url + '/login', {
      username, password
    });
  }

  public RegisterUser(user: Register): Observable<Register> {
    return this.http.post<Register>(this.url + '/register', user);
  }

  public Info() {
    return this.http.get(this.url + '/user/info');
  }
}
