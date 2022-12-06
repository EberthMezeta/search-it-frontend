import { StatisticsComponent } from './components/statistics/statistics.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UploadDocumentComponent } from './components/upload-document/upload-document.component';
import { UsersManagmentComponent } from './components/users-managment/users-managment.component';
import { HomeComponent } from './components/home/home.component';
import { NoAuthComponent } from './components/no-auth/no-auth.component';
import { UserGuardGuard } from './user-guard.guard';
import { SearchDocumentsComponent } from './components/search-documents/search-documents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchDocumentsComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
    path: 'userManagment',
    component: UsersManagmentComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
    path: 'upload',
    component: UploadDocumentComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    pathMatch: 'full',
    canActivate: [UserGuardGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'NoAuth', component: NoAuthComponent },
  { path: 'login', component: LoginComponent },
  { path: '***', component: Page404Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
