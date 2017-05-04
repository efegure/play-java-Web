
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
    loggedIn:boolean=true;
    loggedInUser:string;
    Role:string;
    api:string='http://localhost:9000/'
    constructor(private http: Http) {  
    }

    logoutUser(): Observable<any> {
    let auth:string = localStorage.getItem("Authorization");
    let headers = new Headers();
    headers.append("Authorization",auth);
    let options = new RequestOptions({ headers:headers,method:"get"});
    console.log(options);
     return this.http.get(this.api+'logout',options)
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