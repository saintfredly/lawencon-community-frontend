import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy{
  
login = this.fb.group({
  email : ['', [Validators.required, Validators.minLength(13), Validators.maxLength(45)]],
  pass: ['', [Validators.required]]
})
private login$? : Subscription

constructor(
  private fb : FormBuilder,
  private title : Title,
  // private userService : UserService,
  private router : Router
  ){
this.title.setTitle('Login')
}

 onLogin(){
  

 }


 ngOnDestroy(): void {
   this.login$?.unsubscribe()
 }

}
