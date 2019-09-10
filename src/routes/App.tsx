import React, { lazy, Suspense }from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { Header, PaginationContainer, ContentLoading } from '../components/pageStyles';
import WrapperLogic from '../components/wrapper-logic';
import Filters from '../components/filters';
import { AppProps } from '../types';

const Content = lazy(()=>import('../components/content'));

const App = () => {

  return (
    <WrapperLogic
      render = {
        ({
          products,
          pageSize,
          handleChangePage,
          currentPage,
          count,
          promotions,
          departments,
          setFilters
        }: AppProps) => (
          <>
            <Header>Shop</Header>

            <Filters
              promotions={promotions}
              departments={departments}
              setFilters={setFilters}
            />

            <Suspense fallback={<ContentLoading>loading ...</ContentLoading>}>
              <Content products={products}/>
            </Suspense>

            <PaginationContainer>
              <Pagination
                defaultPageSize={pageSize}
                onChange={handleChangePage}
                current={currentPage}
                total={count}
                style={{ display: 'inline-flex' }}
              />
            </PaginationContainer>
          </>
      )
    }
    />
  );
}

export default App;
