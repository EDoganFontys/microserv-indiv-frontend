import { Component, OnInit } from '@angular/core';
import {User} from "../../classes/user";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {LoginUser} from "../../classes/loginUser";

@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication-component.component.html',
  styleUrls: ['./authentication-component.component.css']
})
export class AuthenticationComponentComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router, private authService: AuthenticationService) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  account: LoginUser = new LoginUser( '', '');
  message: any;

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      console.log(this.account);
      this.authService.Login(this.account.username, this.account.password).subscribe((data: string) => {
        this.loginResponse(data);
      });
    }
  }

  loginResponse(data : any) {
    // tslint:disable-next-line:triple-equals
    this.router.navigate(['login']).then(() => this.message = 'Username or password is invalid.');
  }

  getUserInfo() {
    // @ts-ignore
    this.service.Info().subscribe((data: User) => {
      sessionStorage.setItem('id', data.id.toString());
      sessionStorage.setItem('username', data.username);
      sessionStorage.setItem('role', data.role);
      this.router.navigate(['']).then(() => window.location.reload());
    });
  }
}
