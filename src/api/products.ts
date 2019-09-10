import Api from '../axios';

type Query = {
  skip?: Number,
  limit?: Number,
  query?: any
}

const productsApi = {
  fetchProductsCount: (query: Query) => Api.post('/products/count', query),
  fetchProducts: (query: Query) => Api.post('/products', query),
};

export default productsApi;
