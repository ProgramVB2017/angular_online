import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {routes } from './app.router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { UserSearchListComponent } from './user-search-list/user-search-list.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, SearchUsersComponent, UserSearchListComponent],
  imports: [BrowserModule,
  routes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
