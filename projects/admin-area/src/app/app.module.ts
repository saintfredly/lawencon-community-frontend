import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {ImageModule} from 'primeng/image';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TokenInterceptor } from 'projects/base-area/src/app/interceptor/token.interceptor';
import { ResponseInterceptor } from 'projects/base-area/src/app/interceptor/response.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CategoryComponent } from './pages/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    ButtonModule,
    InputTextModule,
    CardModule,
    PasswordModule,
    ImageModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    DialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true
     },
     {
      provide : HTTP_INTERCEPTORS,
      useClass : ResponseInterceptor,
      multi : true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
