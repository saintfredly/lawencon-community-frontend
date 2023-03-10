import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Observable, tap } from "rxjs"
import { UserService } from "../service/user.service"

@Injectable()

export class ResponseInterceptor implements HttpInterceptor{
    constructor(private router : Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       return next.handle(req).pipe(
        tap({
            next : (event) => {
                if (event instanceof HttpResponse){
                    console.log(event.body)
                }
            },
            error : (event) => {
                if (event instanceof HttpResponse){
                    if (event.status == 401){
                        this.router.navigateByUrl('/login')
                    }
                    console.log()
                }
            },
        })
       )
    }

   

}