import React from 'react';
import { Container, SmallText, PriceText } from './cardStyles';

const DiscountSection = () => {
  return (
    <>
      <Container>
        <SmallText>discount:</SmallText>
        <PriceText smallText={true}>10 % </PriceText>
      </Container>
      <Container>
        <SmallText>department:</SmallText>
        <SmallText>beeb </SmallText>
      </Container>
    </>
  );
};

export default DiscountSection;
