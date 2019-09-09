import Api from '../axios';

type Query = {
  skip: Number,
  limit: Number
}

const productsApi = {
  fetchProductsCount: () => Api.get('/products/count'),
  fetchProducts: (query: Query) => Api.post('/products', query),
};

export default productsApi;
