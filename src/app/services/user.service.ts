
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
    loggedIn:boolean;
    loggedInUser:string;
    Role:string;
    api:string='https://appofefe.herokuapp.com'
    constructor(private http: Http) {  
    }
    

    loginUser(login:Login): Observable<any> {
        let headers = new Headers({"Content-Type":"application/json"});
        let options = new RequestOptions({ headers:headers,method:"post",body:
        {
            "email":login.email,
            "password":login.password
          }});
        console.log(options);
         return this.http.post(this.api+'/login',options)
        .map(res => res.json() as any)
           
         
    }
    //heroku link will come here
    registerUser(newUser : Register): Observable<any> {
        let headers = new Headers({"Content-Type":"application/json"});
        let body = JSON.stringify(newUser);
        let b = JSON.parse(body);
        let options = new RequestOptions({ headers:headers,method:"post",body: {
            "name":newUser.name,
            "password":newUser.password,
            "email":newUser.email,
            "comName":newUser.comName
          }});
        console.log(options);
            return this.http.post(this.api+'/register',options)
                .map(res => res.json() as any)
    }
}