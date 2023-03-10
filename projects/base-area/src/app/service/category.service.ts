import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BASE_URL } from "../constant/base.service";
import { CategoryRes } from "../pojo/category/category-res";
import { ResInsert } from "../pojo/Base-response/res";
import { CategoryReq } from "../pojo/category/category-req";

@Injectable({
    providedIn : 'root'
})
export class CategoryService{

    constructor(private http : HttpClient){}

    getCategory() : Observable<CategoryRes[]>{
        return this.http.get<CategoryRes[]>(`${BASE_URL}/category`)
    }

    setCategory (data : CategoryReq) : Observable<ResInsert>{
        return this.http.post<ResInsert>(`${BASE_URL}/category`,data)
    }

    get token() : string {
        const data = localStorage.getItem('dataLogin')
        if(data){
            return JSON.parse(data).token
        }
        throw new Error('Token is empty')
    } 
}