import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import {TableModule} from 'primeng/table';
import { CardModule } from "primeng/card";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CategoryComponent } from "./category.component";

@NgModule({
    declarations : [AddCategoryComponent],
    imports : 
    [ButtonModule, 
    CommonModule,
    CardModule,
    FormsModule,
    TableModule,
    ReactiveFormsModule,
    
    ],
})
export class CategoryModule {}