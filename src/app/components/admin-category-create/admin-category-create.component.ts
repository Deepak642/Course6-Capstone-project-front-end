import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../common/product-category";
import {ProductBrand} from "../../common/product-brand";
import {BrandService} from "../../services/brand.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.css']
})
export class AdminCategoryCreateComponent implements OnInit {

  productCategory: ProductCategory = new ProductCategory();

  constructor(private  categoryService: CategoryService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveCategory(){
    this.categoryService.createAdminCategory(this.productCategory).subscribe(data => {
        console.log(data);
        this.gotToCategoryList();
      },
      error => console.log(error));
  }

  gotToCategoryList() {
    this.router.navigate(['/admincategory'])
  }

  onSubmit(){
    console.log(this.productCategory)
    this.saveCategory();
  }


}
