import { Component } from '@angular/core';
import { UserService } from "app/services/user.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: []
})
export class AppComponent {
  title = 'app works!';
  constructor(public userService:UserService ,private router:Router) { }
  logout(){
      this.userService.logoutUser().subscribe(response => {
          console.log(response);
          if(response.Success != null){
              this.userService.loggedIn=false;
              localStorage.removeItem("Authorization");
              this.router.navigate(['']);
          }
          else{
              console.log("error at logout");
              
          }
      })    
  }
}
  
  

