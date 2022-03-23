import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../common/cart-item';

import { CartService } from '../../services/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _cartService: CartService
  ) {}

  ngOnInit() {
    this.cartDetails();
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
    });
  }

  cartDetails() {
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    this._cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );

    this._cartService.calculateTotalPrice();
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('customer').value);
    console.log('Emial is', this.checkoutFormGroup.get('customer').value.email);
  }
}
