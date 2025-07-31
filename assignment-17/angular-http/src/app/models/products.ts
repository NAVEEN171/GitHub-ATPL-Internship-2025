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
export enum PopupActions {
  SUCCESS = 'success',
  ERROR = 'error',
  NONE = '',
}
export interface Popup {
  action: PopupActions;
  message: string;
}
