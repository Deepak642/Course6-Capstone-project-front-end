import { ProductCategory } from './product-category';
import { ProductBrand } from './product-brand';

export class Product {
  id: number;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: boolean;
  unitsInStock: number;
  createdOn: Date;
  updatedOn: Date;
  category_id: ProductCategory;
  brand_id: ProductBrand;
}
