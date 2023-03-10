import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UserService } from '../../../../../base-area/src/app/service/user.service';
import { Subscription } from 'rxjs';
import { LoginReq } from 'projects/base-area/src/app/pojo/user/login/login-req';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnDestroy{
  
login = this.fb.group({
  email : ['saint@gmail.com', [Validators.required, Validators.minLength(13), Validators.maxLength(45)]],
  pass: ['saint', [Validators.required]]
})
private login$? : Subscription

constructor(
  private fb : FormBuilder,
  private title : Title,
  private userService : UserService,
  private router : Router
  ){
this.title.setTitle('Login')
}

 onLogin(){
  if(this.login.valid){
    const data : LoginReq ={
      email : this.login.value.email!,
      pass : this.login.value.pass!
    }
    this.login$ = this.userService.login(data).subscribe(result => {
      this.userService.saveDataLogin(result)
      
      const roleCode = this.userService.roleCode
                if(roleCode == 'R0002') {
                    this.goMember()
                
              }
    })
    
  }

 }
 goMember(){
  this.router.navigate(['/member'])
}


 ngOnDestroy(): void {
   this.login$?.unsubscribe()
 }

}
