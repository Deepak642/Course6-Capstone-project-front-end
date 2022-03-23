import { Component, OnInit } from '@angular/core';
import {ProductBrand} from "../../common/product-brand";
import {ProductService} from "../../services/product.service";
import {BrandService} from "../../services/brand.service";

@Component({
  selector: 'app-admin-brand-list',
  templateUrl: './admin-brand-list.component.html',
  styleUrls: ['./admin-brand-list.component.css']
})
export class AdminBrandListComponent implements OnInit {

  brands: ProductBrand[];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAdminBrands();
  }

  private getAdminBrands(){
    this.brandService.getAdminBrandList().subscribe(data => {
      this.brands = data;
    })
  }

  deleteBrand(id: number){
    this.brandService.deleteBrandById(id).subscribe(data => {
      console.log(data);
      this.getAdminBrands();
    })
  }

}
