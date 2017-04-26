import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: UserService, private router: Router) {}

  canActivate() {
    if(this.auth.loggedIn==true) {
      return true;
    } else {
      return false;
    }
  }
}