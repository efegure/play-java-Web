
import { Injectable } from '@angular/core';
import { Http ,Response,Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from '../types/user.type';
import {Register} from '../types/register.type'
import { Login } from "app/types/login.type";

@Injectable()
export class UserService {
    users:User[];
    payment:any;
    loggedIn:boolean;
    loggedInUser:string;
    Role:string;    
    api:string='https://chargercloudapi.herokuapp.com/'
    //api:string='http://localhost:9000/'
    constructor(private http: Http) {  
        if(sessionStorage.getItem("loggedIn")=="true")
        {
            this.loggedIn=true;
        }
        else{
            this.loggedIn=false;
        }
    }

    logoutUser(): Observable<any> {
    let auth:string = sessionStorage.getItem("Authorization");
    let headers = new Headers();
    headers.append("Authorization",auth);
    let options = new RequestOptions({ headers:headers,method:"get"});
    console.log(options);
     return this.http.get(this.api+'logout',options)
    .map(res => res.json() as any)
       
     
}
    getCompanyUsers(): Observable<any> {
        let auth:string = sessionStorage.getItem("Authorization");
        let headers = new Headers();
        headers.append("Authorization",auth);
        let options = new RequestOptions({ headers:headers,method:"get"});
        console.log(options);
         return this.http.get(this.api+'allUsers',options)
        .map(res => res.json() as any) 
    }
    
    getPaymentMethod(): Observable<any> {
        let auth:string = sessionStorage.getItem("Authorization");
        let headers = new Headers();
        headers.append("Authorization",auth);
        let options = new RequestOptions({ headers:headers,method:"get"});
        console.log(options);
         return this.http.get(this.api+'payment',options)
        .map(res => res.json() as any) 
    }

    setPaymentMethod(payment:any): Observable<any> {
        let auth = sessionStorage.getItem("Authorization");
        let headers = new Headers({"Authorization":auth});
        
        let options = new RequestOptions({headers:headers});
        if(payment.method=="Prepaid"){
           options=new RequestOptions({ headers:headers,method:"post",body:
            {
                "method":"prepaid",
                "subscription":"new",
                "periodType":payment.periodType.toLowerCase(),
                "periodAmount":payment.periodAmount.toString()
            }
           });
        }
        else if(payment.method=="Pay-as-you-go"){
            
            options = new RequestOptions({ headers:headers,method:"post",body:
            {
                "method":"billing",
                "subscription":"new",
                "recurrence":payment.recurrence.toLowerCase()
              }});
        }
        else{
            options = new RequestOptions({ headers:headers,method:"post",body:
            {
                "method":"free",
                "subscription":"new"
              }});
        }
        
        console.log(options);
         return this.http.post(this.api+'payment',null,options)
        .map(res => res.json() as any)
    }
    

    loginUser(login:Login): Observable<any> {
        let headers = new Headers({"Content-Type":"application/json;charset=UTF-8"});
        let options = new RequestOptions({ headers:headers,method:"post",body:
        {
            "email":login.email,
            "password":login.password
          }});
        console.log(options);
         return this.http.post(this.api+'login',options)
        .map(res => res.json() as any)
           
         
    }
    //heroku link will come here
    registerUser(newUser : Register): Observable<any> {
        let headers = new Headers({"Content-Type":"application/json;charset=UTF-8"});
        let body = JSON.stringify(newUser);
        let b = JSON.parse(body);
        let options = new RequestOptions({ headers:headers,method:"post",body: {
            "name":newUser.name,
            "password":newUser.password,
            "email":newUser.email,
            "comName":newUser.comName
          }});
        console.log(options);
            return this.http.post(this.api+'register',options)
                .map(res => res.json() as any)
    }
}