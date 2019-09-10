export interface Product {
  _id: String,
  name: String,
  price: number,
  promotions?: Promotion[]
};

export interface Promotion {
  _id: string,
  code: String,
  active: Boolean,
  discount: String
};

export interface Department {
  _id: string,
  name: String
};
