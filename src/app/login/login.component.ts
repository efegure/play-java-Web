import { Component, OnInit } from '@angular/core';
import {Login} from '../types/login.type'
import { UserService } from "app/services/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login :Login = {email:'',password:''}
  constructor(private userService:UserService,private router:Router ) { }

  ngOnInit() {
  }

  loginUser(){
      
      if(this.login.email!=null||this.login.password!=null){
      
      this.userService.loginUser(this.login).subscribe(response => {
          console.log(response);
          if(response.Authorization==null){
              this.userService.loggedIn=false;
          }
          else{
              this.userService.loggedIn=true;
              this.router.navigate(['home']);
          }
      },    
      
      data => localStorage.setItem('Authorization', data.Authorization));
      
      }
  }
}
