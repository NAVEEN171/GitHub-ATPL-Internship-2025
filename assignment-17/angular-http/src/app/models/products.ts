export interface Product {
  id: string;
  name: string;
  image?: string;
  price: number;
}

export interface ProductForm {
  name: string;
  image?: string;
  price: number;
}
