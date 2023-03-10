import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { CategoryReq } from "projects/base-area/src/app/pojo/category/category-req";
import { CategoryService } from "projects/base-area/src/app/service/category.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-add-category',
    templateUrl: './add-category.component.html',
  })
export class AddCategoryComponent implements OnInit, OnDestroy{
    categorys = this.fb.group({
        categoryName: ['', Validators.required]
        })
        private categoryAdd$? : Subscription

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

          addCategory(){
            const data : CategoryReq ={
              categoryName: this.categorys.value.categoryName!,
              id: "",
              ver: 0,
              isActive: false
            }
            this.categoryAdd$ = this.categoryService.setCategory(data).subscribe(result =>{
              this.router.navigate(['/category'])
          })
          }
      

          ngOnInit(): void {
              throw new Error("Method not implemented.");
            }
            ngOnDestroy(): void {
            this.categoryAdd$?.unsubscribe()
            }
}