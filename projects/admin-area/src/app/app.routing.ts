import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/category/add-category/add-category.component';
import { CategoryComponent } from './pages/category/category.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'category',
    loadChildren: () =>
      import('./pages/category/category.module').then((c) => c.CategoryModule),
    component: CategoryComponent,
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./pages/category/category.module').then((c) => c.CategoryModule),
    component: AddCategoryComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouting {}
