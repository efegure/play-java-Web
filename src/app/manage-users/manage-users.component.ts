import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from '../types/user.type';
import { Register } from '../types/register.type';
@Component({
  selector: 'manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  users:User[];
success:boolean=false;
newUser:Register =
{
email:'',
name:'',
password:'',
comName:'',
}
  constructor(private userService :UserService) {
      
  }

  ngOnInit() {
      if(this.userService.users == null){
      this.userService.getCompanyUsers().subscribe(response => {
          console.log(response);
          this.users=response;
          this.userService.users=response;
      })
      }
      else{
          this.users=this.userService.users;
      }
  }
  registerUser(){
      
  }

}
