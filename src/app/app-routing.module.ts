import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from'./home/home.component'
import { AuthGuard } from './services/auth.guard';
import { UnauthorizedComponent }from './unauthorized/unauthorized.component'
import { ManageUsersComponent } from './manage-users/manage-users.component'
import { InvoiceInfoComponent } from './invoice-info/invoice-info.component'
import { BillingInfoComponent } from './billing-info/billing-info.component'
import { HomeContentComponent } from './home-content/home-content.component'
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
      canActivate: [AuthGuard],
      children: [
               { path:'',component:HomeContentComponent },
               { path: 'users', component:ManageUsersComponent },
               { path: 'billing', component:BillingInfoComponent },
               { path: 'invoice', component:InvoiceInfoComponent }
                 ]
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
