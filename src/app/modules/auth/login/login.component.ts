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
      debugger
      console.log("response....", res);
      if (res.success) {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', JSON.stringify(res.token));
        this.route.navigate(['secure/users']);
      }
      else {
        alert(res.message);
      }
    })


  }


}
