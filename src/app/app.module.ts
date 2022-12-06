import { CookieService } from 'ngx-cookie-service';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDocumentsComponent } from './components/search-documents/search-documents.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './components/page404/page404.component';
import { NoAuthComponent } from './components/no-auth/no-auth.component';
import { HomeComponent } from './components/home/home.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { UsersManagmentComponent } from './components/users-managment/users-managment.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchDocumentsComponent,
    LoginComponent,
    Page404Component,
    NoAuthComponent,
    HomeComponent,
    UploadDocumentComponent,
    UsersManagmentComponent,
    StatisticsComponent,
    EditProfileComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
