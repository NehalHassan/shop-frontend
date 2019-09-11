import Api from '../axios';

const promotionsApi = {
  fetchPromotions: () => Api.get('/promotion'),
};

export default promotionsApi;
