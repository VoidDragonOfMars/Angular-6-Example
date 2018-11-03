import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {UserService} from './services/user.service';
import {AuthenticationService} from './services/login.service';
import {RouterModule} from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    ListUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
