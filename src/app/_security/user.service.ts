import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly url: any;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_url}`;
  }
  public Info() {
    return this.http.get(this.url + '/user/info');
  }
}
