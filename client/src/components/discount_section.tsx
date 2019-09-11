import React, { useContext } from 'react';
import { Container, SmallText } from './cardStyles';
import { ProductContext } from './content';

const DiscountSection = () => {
  const product: any = useContext(ProductContext);
  return (
    <>
      <Container>
        <SmallText>department:</SmallText>
        <SmallText>{product && product.department_id && product.department_id.name}</SmallText>
      </Container>
    </>
  );
};

export default DiscountSection;
