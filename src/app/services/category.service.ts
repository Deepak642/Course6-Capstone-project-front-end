import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBrand } from '../common/product-brand';
import { HttpClient } from '@angular/common/http';
import { ProductCategory } from '../common/product-category';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoryUrl = environment.apiUrl + '/admin/category';

  private deleteCategoryUrl = environment.apiUrl + '/admin/deletecategory';

  private adminCreateCategoryUrl = environment.apiUrl + '/admin/addcategory';

  constructor(private httpClient: HttpClient) {}

  getAdminCategoryList(): Observable<ProductCategory[]> {
    return this.httpClient.get<ProductCategory[]>(`${this.categoryUrl}`);
  }

  deleteCategoryById(id: number): Observable<Object> {
    return this.httpClient.get(`${this.deleteCategoryUrl}?id=${id}`);
  }

  createAdminCategory(category: ProductCategory): Observable<Object> {
    return this.httpClient.post(`${this.adminCreateCategoryUrl}`, category);
  }
}
