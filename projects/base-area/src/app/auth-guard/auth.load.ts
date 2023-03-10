import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../service/user.service";

@Injectable({
    providedIn : 'root'
})
export class AuthLoad implements CanLoad{
    constructor(
        private userService : UserService,
        private router : Router
    ){}
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        try {
            this.userService.token
            return true
        } catch (error) {
            this.router.navigateByUrl('/login')
            return false
        }
    }
      

}