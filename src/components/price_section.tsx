import React, { useContext} from 'react';
import { Container, PriceText, SmallText } from './cardStyles';
import { ProductContext } from './content';

const PriceSection = () => {
  const product: any = useContext(ProductContext);

  return (
    <Container>
      <PriceText isLineThrough={true}>{product.price}</PriceText>
      <PriceText>90</PriceText>
      <SmallText>EGP</SmallText>
    </Container>
  );
};

export default PriceSection;
