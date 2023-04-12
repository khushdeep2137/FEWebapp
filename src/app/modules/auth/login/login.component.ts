import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any = FormGroup;
  isLogin: boolean = false;

  constructor(private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.initLogin();
  }

  initLogin() {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl("", [Validators.minLength(6), Validators.required, Validators.pattern(new RegExp("(?=.*[0-9])")), Validators.pattern(new RegExp("(?=.*[A-Z])"))])
    })

  }

  onLogin() {
    this.isLogin = true
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log("response....", res);

    })
    let data = {
      emailId: this.loginForm.value.email,
      firstName: "william",
      lastName: "Smith",
      id: "1"
    }
    localStorage.setItem('user', JSON.stringify(data));
    let token = "avczy35736384"
    localStorage.setItem('token', JSON.stringify(token));
    this.route.navigate(['secure/users']);

  }


}
