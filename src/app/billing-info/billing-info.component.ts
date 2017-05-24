import { Component, OnInit } from '@angular/core';
import { UserService } from "app/services/user.service";
@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  constructor(private userService:UserService) {
      
  }
  public subscription:any={
          startDate:{
              dayOfMonth:'',
              monthOfYear:'',
              year:''},
          payment:{
                  method:'', subscription:'',
          },
          endDate:{
              dayOfMonth:'',
              monthOfYear:'',
              year:''
          }
  };
  payment:any={
          method:'', subscription:'',periodType:'',periodAmount:'',recurrence:''
  }
  
  ngOnInit() {
      if(this.userService.payment == null){
          this.userService.getPaymentMethod().subscribe(response=>{
                  this.userService.payment=response;
                  this.subscription=response;
                  console.log(response);
          })
      }
      else{
          this.subscription=this.userService.payment;
      }
  }
  
  selectPayment(){
      this.userService.setPaymentMethod(this.payment).subscribe(response=>{
          if(response.Success != null){
              this.userService.getPaymentMethod().subscribe(response=>{
                  this.userService.payment=response;
                  this.subscription=response;
                  console.log(response);
          })
          }
          else{
              console.log(response);
          }
      })
  }

}
