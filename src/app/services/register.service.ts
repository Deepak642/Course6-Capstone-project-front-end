import { Injectable } from '@angular/core';
import { ProductBrand } from '../common/product-brand';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Register } from '../common/register';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerUserUrl = environment.apiUrl + '/user/register';

  private registerAdminUrl = environment.apiUrl + '/admin/registeradmin';

  constructor(private httpClient: HttpClient) {}

  createUserRegister(register: Register): Observable<Object> {
    return this.httpClient.post(`${this.registerUserUrl}`, register);
  }

  createAdminRegister(register: Register): Observable<Object> {
    return this.httpClient.post(`${this.registerAdminUrl}`, register);
  }
}
