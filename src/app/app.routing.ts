import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ListUserComponent} from './list-user/list-user.component';
import {AuthGuard} from './services/auth.guard';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list-user',
    component: ListUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path : '',
    component : ListUserComponent,
    canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(appRoutes);
