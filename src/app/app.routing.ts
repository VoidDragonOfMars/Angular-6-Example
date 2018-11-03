import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
