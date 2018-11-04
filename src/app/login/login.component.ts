import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/login.service';
import {AppComponent} from '../app.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TokenStorage} from '../services/token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  invalidLogin = false;
  private password: string;
  private username: string;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorage) { }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.username = this.loginForm.controls.username.value;
    this.password = this.loginForm.controls.password.value;

    this.authenticationService.login(this.username, this.password)
      .subscribe(data => {
      if (data.status === 200) {
        //window.localStorage.setItem('token', data.token);
        this.tokenStorage.saveToken(data.token);
        this.router.navigate(['list-user']);
      } else {
        this.invalidLogin = true;
        alert(data.message);
      }
    });
  }


  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }



}
