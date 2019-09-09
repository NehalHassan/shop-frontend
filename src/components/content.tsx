import React, { Suspense, lazy} from 'react';
import styled from '@emotion/styled';

const Card = lazy(() => import('../components/card'))

export const ProductContext = React.createContext(null)

const ContentWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center'
})

const Content = ({products}: any) => {

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
