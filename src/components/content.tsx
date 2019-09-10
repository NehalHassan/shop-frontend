import React, { Suspense, lazy} from 'react';
import styled from '@emotion/styled';
import { Product } from '../types';

const Card = lazy(() => import('../components/card'))

export const ProductContext = React.createContext(null);

const ContentWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center'
});

interface ContentProps {
  products: Product[];
}

const Content = ({ products }: ContentProps) => {

  return (
    <ContentWrapper>
      {products && products.length && products.map((product: any) => (
            <ProductContext.Provider value={product}>
              <Suspense fallback=''>
                <Card />
              </Suspense>
            </ProductContext.Provider>
      ))}
    </ContentWrapper>
  )
};

export default Content;
