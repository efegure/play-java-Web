import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
    error:boolean=false;
    api:String;

  constructor(private userService:UserService) { }

  ngOnInit() {
      
  }

  generateKey(){
      this.userService.generateApiKey().subscribe(response=>{
          if(response.Success!=null){
              this.api=response.Success;
          }
          else{
              this.error=true;
          }
      })
  }
}
