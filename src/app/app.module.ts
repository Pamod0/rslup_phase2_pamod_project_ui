import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { RegisterPageComponent } from './user/register-page/register-page.component';
import { UsersListComponent } from './user-management/users-list/users-list.component';
import { AddEditUsersComponent } from './user-management/add-edit-users/add-edit-users.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageTestComponent } from './user/login-page-test/login-page-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    RegisterPageComponent,
    UsersListComponent,
    AddEditUsersComponent,
    UserHomeComponent,
    MainPageComponent,
    LoginPageTestComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
