import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from'./home/home.component'
import { AuthGuard } from './services/auth.guard';
import {UnauthorizedComponent}from './unauthorized/unauthorized.component'
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: []
  },
  {
      path: 'signUp',
      component: SignUpComponent,
      children: []   
  },
  {
      path: 'about',
      component: AboutComponent,
      children: []   
  },
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard] 
  },
  {
      path: 'unauhtorized',
      component: UnauthorizedComponent,
      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
