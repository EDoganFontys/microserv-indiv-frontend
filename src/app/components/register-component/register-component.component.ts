import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Register} from "../../classes/register";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    controlPassword: new FormControl(''),
    address: new FormControl(''),
  });

  message: any;

  register: Register = new Register(
    0,
    '',
    '',
    '',
    ''
  );

  constructor(private accountService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    if(this.register.password == this.register.controlPassword){
      this.message = '';
    this.accountService.RegisterUser(this.register).subscribe((data) => {
      this.router.navigate(['']).then(() => window.location.reload());
    });}
    else{
      this.message = 'Passwords do not match.';
    }
  }
}
