import {useEffect, useState, useCallback} from 'react';
import productsApi from '../api/products';
import departmentsApi from '../api/departments';
import promotionsApi from '../api/promotions';

const WrapperLogic = ({ render }: any) => {

  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState();
  const [promotions, setPromotions] = useState();
  const [departments, setDepartments] = useState();
  const [filterQuery, setFilterQuery] = useState({})
  const pageSize = 4;

  // onpagination change
  const handleChangePage = async (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  const changePagination = useCallback(() => {
    let skip = (currentPage - 1) * pageSize;
    return {
      skip,
      limit: pageSize,
    }
  }, [currentPage])

  const fetchProducts = useCallback(async () => {
    const { data } = await productsApi.fetchProductsCount(filterQuery);
    const paginationSet = changePagination();
    setCount(data);
    productsApi.fetchProducts({ ...paginationSet, ...filterQuery })
      .then((res: any) => setProducts(res.data))
      .catch((err: any) => console.log(err));
  }, [filterQuery, changePagination]);

  useEffect(() => {
    if (currentPage) {
      fetchProducts();
    }
  }, [fetchProducts, currentPage]);

  useEffect(() => {
    departmentsApi.fetchDepartments().then(
      ({data}) => setDepartments(data)
    );
    promotionsApi.fetchPromotions().then(
      ({data}) => setPromotions(data)
    );
  }, []);

  const setFilters = (filter: string, value: string) => {
    let query = {};
    setCurrentPage(1);
    switch(filter){
      case 'promotions':
        query = {
          promotions: { '$in': [value] }
        };
        break;
      case 'department':
        query = {
          department_id: value
        }
        break;
      case 'search':
        query = {
          name: { $regex: value, $options: 'i' }
        }
        break;
    }
    setFilterQuery({query});
    fetchProducts()
  }

  return render({
    products,
    pageSize,
    handleChangePage,
    currentPage,
    count,
    promotions,
    departments,
    setFilters
  })
};

export default WrapperLogic;