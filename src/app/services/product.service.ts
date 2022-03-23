import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';
import { ProductBrand } from '../common/product-brand';
import { CartItem } from '../common/cart-item';
import { environment } from '../../environments/environment';
//import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.apiUrl + '/products';

  private categoryUrl = environment.apiUrl + '/product-category';

  private brandUrl = environment.apiUrl + '/product-brand';

  private adminUrl = environment.apiUrl + '/admin/product';

  private adminCreateProductUrl = environment.apiUrl + '/admin/addproduct';

  private productByIdUrl = environment.apiUrl + '/admin/productbyid';

  private deleteProductUrl = environment.apiUrl + '/admin/deleteproduct';

  private updateProductUrl = environment.apiUrl + '/admin/updateproduct';

  constructor(private httpClient: HttpClient) {} // private appComponent: AppComponent
  //Admin APIs:
  getAdminList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.adminUrl}`);
  }
  //
  createAdminProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.adminCreateProductUrl}`, product);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.productByIdUrl}/${id}`);
  }

  updateProduct(id: number, prodcut: Product): Observable<Object> {
    return this.httpClient.put(`${this.updateProductUrl}/${id}`, prodcut);
  }

  deleteProductById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.deleteProductUrl}?id=${id}`);
  }

  //User APIs:
  getProducts(theCategoryId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}`;

    return this.getProductsList(searchUrl);
  }

  getProductsbyBranch(theBrandId: number): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/brandid?id=${theBrandId}`;

    return this.getProductsList(searchUrl);
  }

  private getProductsList(searchUrl: string): Observable<Product[]> {
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productcategory));
  }

  getProductBrand(): Observable<ProductBrand[]> {
    return this.httpClient
      .get<GetResponseProductBrand>(this.brandUrl)
      .pipe(map((response) => response._embedded.productbrand));
  }

  searchProducts(keyword: string): Observable<Product[]> {
    const searchUrl = `${this.baseUrl}/search/searchbykeyword?name=${keyword}`;

    return this.getProductsList(searchUrl);
  }

  get(productId: number): Observable<Product> {
    const productDetailsUrl = `${this.baseUrl}/${productId}`;
    return this.httpClient.get<Product>(productDetailsUrl);
  }
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}
interface GetResponseProductCategory {
  _embedded: {
    productcategory: ProductCategory[];
  };
}

interface GetResponseProductBrand {
  _embedded: {
    productbrand: ProductBrand[];
  };
}

interface GetResponseProducts {
  _embedded: {
    products: Product[];
  };
}
