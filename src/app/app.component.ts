import { Component } from '@angular/core';
import {Product} from "./common/product";
import {LoginService} from "./services/login.service";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //environmentUrl = environment.apiUrl;
  // globalUrl(){
  //   this.productService.getProducts()
  // }

  public loggedIn=false;
  // products: Product
  constructor(private loginService:LoginService)
  {

  }

  ngOnInit(): void{
    this.loggedIn=this.loginService.isLoogedIn()
  }

  logoutUser()
  {
    this.loginService.logout()
   // location.reload()
    window.location.href="/login"
  }

}
