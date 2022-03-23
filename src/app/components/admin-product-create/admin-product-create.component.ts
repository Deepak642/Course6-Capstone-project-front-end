import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.css']
})
export class AdminProductCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private  productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveProduct(){
    this.productService.createAdminProduct(this.product).subscribe(data => {
      console.log(data);
      this.gotToProductList();
    },
    error => console.log(error));
  }

  gotToProductList() {
    this.router.navigate(['/adminproduct'])
  }

  onSubmit(){
    console.log(this.product)
    this.saveProduct();
  }

}
