import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
  })
export class RegisterComponent{
    register = this.fb.group({
        name: ['', [Validators.required]],
        email : ['', [Validators.required, Validators.minLength(13), Validators.maxLength(45)]],
        pass: ['', [Validators.required]]
      })
      private register$? : Subscription
      
      constructor(
        private fb : FormBuilder,
        private title : Title,
        // private userService : UserService,
        private router : Router
        ){
      this.title.setTitle('Register')
      }
      
       onRegister(){
        
      
       }
      
      
       ngOnDestroy(): void {
         this.register$?.unsubscribe()
       }
      
}