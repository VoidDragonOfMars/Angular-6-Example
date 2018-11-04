import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUserComponent} from './list-user/list-user.component';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent },
  {
    path : '',
    component : LoginComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
