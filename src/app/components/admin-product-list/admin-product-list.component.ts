import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getAdminProducts();
  }

 private getAdminProducts(){
    this.productService.getAdminList().subscribe(data => {
      this.products = data;
    })
 }

  updateProduct(id: number){
    this.router.navigate(['updateproduct', id]);
  }

 deleteProduct(id: number){
    this.productService.deleteProductById(id).subscribe(data => {
      console.log(data);
      this.getAdminProducts();
    })
 }

  productDetails(id: number){
    this.router.navigate([`adminproductdetails`, id]);
  }

}
