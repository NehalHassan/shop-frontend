import Api from '../axios';

interface CountQuery {
  skip?: Number,
  limit?: Number,
}

interface FetchProductsQuery extends CountQuery {
  query?: {
    promotions?: {
      $in: string
    },
    department_id?: string,
    name?: {
      $regex: string,
      $options: string
    }
  }
}

const productsApi = {
  fetchProductsCount: (query: CountQuery) => Api.post('/products/count', query),
  fetchProducts: (query: FetchProductsQuery) => Api.post('/products', query),
};

export default productsApi;
