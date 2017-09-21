import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UserSearchListComponent } from './user-search-list/user-search-list.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'search-users', component: SearchUsersComponent },
    { path: 'user-search-list', component: UserSearchListComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);