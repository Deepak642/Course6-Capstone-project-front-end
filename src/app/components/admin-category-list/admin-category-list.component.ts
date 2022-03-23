import { Component, OnInit } from '@angular/core';
import {ProductBrand} from "../../common/product-brand";
import {ProductCategory} from "../../common/product-category";
import {BrandService} from "../../services/brand.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  categories: ProductCategory[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAdminCategory()
  }

  private getAdminCategory(){
    this.categoryService.getAdminCategoryList().subscribe(data => {
      this.categories = data;
    })
  }

  deleteCategory(id: number){
    this.categoryService.deleteCategoryById(id).subscribe(data => {
      console.log(data);
      this.getAdminCategory();
    })
  }

}
