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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './services/interceptor';


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
  providers: [UserService,
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true},
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
