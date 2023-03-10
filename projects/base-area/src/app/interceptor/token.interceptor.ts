import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { UserService } from "../service/user.service"

@Injectable()

export class TokenInterceptor implements HttpInterceptor{

    constructor(private userService : UserService){
        
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get('skip') === 'true'){
            return next.handle(req)
        
        }
        const reqClone = req.clone({headers : new HttpHeaders().append('Authorization', `Bearer ${this.userService.token}`)
    })
        console.log('......intercept')
        return next.handle(reqClone)
    }

   

}