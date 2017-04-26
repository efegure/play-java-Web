import { Component, OnInit } from '@angular/core';
import {Register} from '../types/register.type';
import{ UserService } from '../services/user.service'
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  newUser:Register =
  {
  email:'',
  name:'',
  password:'',
  comName:'',
  }
  constructor(private userService : UserService) { }

  ngOnInit() {
      
  }
  registerUser(){
      this.userService.registerUser(this.newUser).subscribe(response => {
          console.log(response)
      });  
  }

}
