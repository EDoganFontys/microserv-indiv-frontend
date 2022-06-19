import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_security/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginUser} from "../../classes/loginUser";
import {TokenStorageService} from "../../_security/token-storage.service";

@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication-component.component.html',
  styleUrls: ['./authentication-component.component.css']
})
export class AuthenticationComponentComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private tokenStorage: TokenStorageService) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  account: LoginUser = new LoginUser( '', '');
  message: any;
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  submit() {
    if (this.form.valid) {
      console.log(this.account);
      this.authService.Login(this.account.username, this.account.password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.router.navigate(['home']).then(() => window.location.reload());
        },
        err => {
          this.loginResponse(err.error.message);
          this.isLoginFailed = true;
        }
      );
    }
  }

  loginResponse(message : string) {
    this.router.navigate(['login']).then(() => this.message = message);
  }
}
