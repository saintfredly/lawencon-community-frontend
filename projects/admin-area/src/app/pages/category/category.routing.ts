import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryComponent } from './category.component';



const appRoutes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'add',
    component: AddCategoryComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class CategoryRouting {}
