import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder} from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CategoryRes } from "projects/base-area/src/app/pojo/category/category-res";
import { CategoryService } from "projects/base-area/src/app/service/category.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
  })
export class CategoryComponent implements OnInit, OnDestroy{
  

    category : CategoryRes[]=[]
    private category$? : Subscription


    constructor (
        private title : Title,
        private categoryService : CategoryService,
        private fb: FormBuilder,
        private router: Router
      ){
        {
          this.title.setTitle('Data Kategori')
          }
      }
      change(){

      }
      clear(){

      }


    ngOnInit(): void {
        this.category$ = this.categoryService.getCategory().subscribe(result =>{
        this.category = result
    })
    }
    ngOnDestroy(): void {
        this.category$?.unsubscribe()
    }

}