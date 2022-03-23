import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  product: Product = new Product();

  constructor(private _activatedRoute: ActivatedRoute,
              private _productService: ProductService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      () => {
        this.getProductInfo();
      }
    )
  }

  getProductInfo(){

    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');

    this._productService.get(id).subscribe(
      data => {
        this.product = data;
      }
    )

  }


}
