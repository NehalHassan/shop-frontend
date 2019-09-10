import React, {useEffect, useState} from 'react';
import productsApi from '../api/products';
import departmentsApi from '../api/departments';
import promotionsApi from '../api/promotions';

const WrapperLogic = ({ render }: any) => {

  const pageSize = 4;
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1)
  const [products, setProducts] = useState();
  const [promotions, setPromotions] = useState();
  const [departments, setDepartments] = useState();

  // onpagination change
  const handleChangePage = async (page: number) => {
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  // fetch all products
  const fetchProducts = async () => {
    const { data } = await productsApi.fetchProductsCount();
    setCount(data);
    const paginationSet = changePagination();
    productsApi.fetchProducts(paginationSet)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  // set skip and limit  for pagination
  const changePagination = () => {
    let skip = (currentPage - 1) * pageSize;
    return {
      skip,
      limit: pageSize,
    };
  };

  useEffect(() => {
    if (currentPage) {
      fetchProducts();
    }
  }, [currentPage]);

  useEffect(() => {
    departmentsApi.fetchDepartments().then(
      ({data}) => setDepartments(data)
    );
    promotionsApi.fetchPromotions().then(
      ({data}) => setPromotions(data)
    );
  }, []);

  const handleChangeDept = (value: String) => {
    console.log(value)
  }

  const handleChangePromo = (value: String) => {
    console.log(value)
  }

  const handleSearchProduct = (value: String) => {
    console.log(value)
  }

  return render({
    products,
    pageSize,
    handleChangePage,
    currentPage,
    count,
    handleChangeDept,
    handleChangePromo,
    handleSearchProduct,
    promotions,
    departments
  })
};

export default WrapperLogic;