import { Routes } from '@angular/router';
import { UsersListComponent } from './users/users-list/users-list';
import { UserDetailComponent } from './users/user-detail/user-detail';

export const routes: Routes = [
    { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' }
];
