import React, { lazy, Suspense }from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { Header, PaginationContainer, ContentLoading, EmptyState } from '../components/pageStyles';
import WrapperLogic from '../components/wrapper-logic';
import Filters from '../components/filters';
import { Product, Promotion, Department } from '../types';

const Content = lazy(()=>import('../components/content'));
export interface AppProps {
  products: Product[],
  promotions: Promotion[],
  departments: Department[],
  pageSize: number,
  currentPage: number,
  count: number,
  handleChangePage: (x: number) => void,
  setFilters: (x: string, y: string) => void,
};

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

            {count>0 && <PaginationContainer>
              <Pagination
                defaultPageSize={pageSize}
                onChange={handleChangePage}
                current={currentPage}
                total={count}
                style={{ display: 'inline-flex' }}
              />
            </PaginationContainer>}

            {count<=0 && <EmptyState>no Products</EmptyState>}
          </>
      )
    }
    />
  );
}

export default App;
