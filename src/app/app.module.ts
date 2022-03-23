import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderedDetailsComponent } from './components/ordered-details/ordered-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SearchComponent } from './components/search/search.component';
import {ProductService} from "./services/product.service";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductBrandComponent } from './components/product-brand/product-brand.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminProductCreateComponent } from './components/admin-product-create/admin-product-create.component';
import { AdminProductDetailsComponent } from './components/admin-product-details/admin-product-details.component';
import { AdminBrandListComponent } from './components/admin-brand-list/admin-brand-list.component';
import { AdminCategoryListComponent } from './components/admin-category-list/admin-category-list.component';
//import { AdminDeleteProductComponent } from './components/admin-delete-product/admin-delete-product.component';
import { AdminUpdateProductComponent } from './components/admin-update-product/admin-update-product.component';
import { AdminBrandCreateComponent } from './components/admin-brand-create/admin-brand-create.component';
import { AdminCategoryCreateComponent } from './components/admin-category-create/admin-category-create.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {AuthGuard} from "./services/auth.guard";
import {AuthInterceptor} from "./services/auth.interceptor";
import { AdminRegisterComponent } from './components/admin-register/admin-register.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
//import { environment } from '../environments/environment';

const routes: Routes = [
  {path: 'ordered-details', component: OrderedDetailsComponent},
  {path: 'admincreate', component: AdminProductCreateComponent},
  {path: 'adminbrandcreate', component: AdminBrandCreateComponent},
  {path: 'admincategorycreate', component: AdminCategoryCreateComponent},
  {path: 'adminproduct', component: AdminProductListComponent},
  {path: 'adminproductdetails/:id', component: AdminProductDetailsComponent},
  {path: 'adminbrand', component: AdminBrandListComponent},
  {path: 'admincategory', component: AdminCategoryListComponent},
  {path: 'updateproduct/:id', component: AdminUpdateProductComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'adminlogin', component: AdminLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'adminregister', component: AdminRegisterComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'products', component: ProductListComponent, canActivate:[AuthGuard]},
  {path: 'search/:keyword',component: ProductListComponent},
  {path: 'category/:category_id', component: ProductListComponent},
  {path: 'brand/:brand_id', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    OrderedDetailsComponent,
    PageNotFoundComponent,
    ProductCategoryComponent,
    ProductDetailsComponent,
    ProductListComponent,
    SearchComponent,
    ProductBrandComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AdminProductListComponent,
    AdminProductCreateComponent,
    AdminProductDetailsComponent,
    AdminBrandListComponent,
    AdminCategoryListComponent,
    //AdminDeleteProductComponent,
    AdminUpdateProductComponent,
    AdminBrandCreateComponent,
    AdminCategoryCreateComponent,
    AdminRegisterComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes)
    // BrowserAnimationsModule
  ],
  providers: [
    ProductService,
    AuthGuard,
    [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
