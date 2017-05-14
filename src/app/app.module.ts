import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserService} from '../app/services/user.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {AuthGuard} from './services/auth.guard';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { InvoiceInfoComponent } from './invoice-info/invoice-info.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    HomeComponent,
    UnauthorizedComponent,
    ManageUsersComponent,
    BillingInfoComponent,
    InvoiceInfoComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
