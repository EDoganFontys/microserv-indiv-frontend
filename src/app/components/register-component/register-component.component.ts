import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import Validation from '../../utils/validation';
import {Register} from "../../classes/register";
import {AuthService} from "../../_security/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  form: any;
  submitted = false;
  register: any;
  errorMessage: any;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['',[
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.register = new Register(
      this.form.value.username,
      this.form.value.email,
      this.form.value.password
    );
    console.log(this.register);
    this.authService.Register(this.register).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
      }
    )
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
