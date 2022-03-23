import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {ProductBrand} from "../../common/product-brand";
import {BrandService} from "../../services/brand.service";

@Component({
  selector: 'app-admin-brand-create',
  templateUrl: './admin-brand-create.component.html',
  styleUrls: ['./admin-brand-create.component.css']
})
export class AdminBrandCreateComponent implements OnInit {

  productBrand: ProductBrand = new ProductBrand();

  constructor(private  brandService: BrandService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveBrand(){
    this.brandService.createAdminBrand(this.productBrand).subscribe(data => {
        console.log(data);
        this.gotToBrandList();
      },
      error => console.log(error));
  }

  gotToBrandList() {
    this.router.navigate(['/adminbrand'])
  }

  onSubmit(){
    console.log(this.productBrand)
    this.saveBrand();
  }


}
