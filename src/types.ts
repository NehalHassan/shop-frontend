export interface AppProps {
  products: Product[],
  pageSize: number,
  handleChangePage: (x: number) => void,
  currentPage: number,
  count: number,
  handleChangeDept: (x: String) => void,
  handleChangePromo: (x: String) => void,
  handleSearchProduct: (x: String) => void,
  promotions: Promotion[],
  departments: Department[]
};

export interface Product {
  _id: String,
  name: String,
  price: number
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
