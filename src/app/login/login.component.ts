import { Component, OnInit } from '@angular/core';
import { Login } from '../types/login.type'
import { UserService } from "app/services/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  error:boolean=false;
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
              this.error=true;
          }
          else{
              this.userService.loggedIn=true;
              this.error=false;
              localStorage.setItem("Authorization", response.Authorization);
              this.router.navigate(['home']);
              
          }
      });
      
      }
      /*
      this.userService.loggedIn=true;
      localStorage.setItem("Authorization", "fc2b4db0-4a56-4beb-a067-901b2d83ce7d");
      this.router.navigate(['home']);
      */
  }
}
