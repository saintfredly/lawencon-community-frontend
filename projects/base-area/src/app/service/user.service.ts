import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/base.service";
import { LoginReq } from "../pojo/user/login/login-req";
import { LoginRes } from "../pojo/user/login/login-res";

@Injectable({
    providedIn : 'root'
})
export class UserService{
    constructor(private http : HttpClient){}

    login(data : LoginReq) : Observable<LoginRes>{
        return this.http.post<LoginRes>(`${BASE_URL}/users/login`, data,
        { headers : { skip : 'true'}})

    }
    saveDataLogin(data : LoginRes){
        localStorage.setItem('dataLogin', JSON.stringify(data))
    }
    get token() : string {
        const data = localStorage.getItem('dataLogin')
        if(data){
            return JSON.parse(data).token
        }
        throw new Error('Token is empty')
    } 
    get roleCode() : string{
        const data = localStorage.getItem('dataLogin')
        if(data){
            return JSON.parse(data).roleCode
        }
        throw new Error('role false')
    }

}