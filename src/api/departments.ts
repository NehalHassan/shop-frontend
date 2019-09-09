import Api from '../axios';

const departmentsApi = {
  fetchDepartments: () => Api.get('/departments'),
};

export default departmentsApi;
