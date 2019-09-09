import React from 'react';
import { Container, SmallText, PriceText } from './cardStyles';

const DiscountSection = () => {
  return (
    <Container>
      <SmallText>discount:</SmallText>
      <PriceText smallText={true}>10 % </PriceText>
    </Container>
  );
};

export default DiscountSection;
