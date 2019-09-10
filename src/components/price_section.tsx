import React, { useContext } from 'react';
import { Container, PriceText, SmallText } from './cardStyles';
import { ProductContext } from './content';

const PriceSection = () => {
  const product: any = useContext(ProductContext);

  const discountsArray = product.promotions.filter((promo: any) => promo.active).map((promo: any) => promo.discount)
  const hasDiscount = discountsArray.length > 0;
  const discountAmount = hasDiscount && discountsArray.reduce((a: number, b: number) => a + b);


  const calcNewPrice = () => {
    if (hasDiscount){
      return product.price - (product.price * discountAmount /100)
    }
  }
  // console.log(product)

  return (
    <>
      <Container>
        <PriceText isLineThrough={hasDiscount}>{product.price}</PriceText>
        <PriceText>{calcNewPrice()}</PriceText>
        <SmallText>EGP</SmallText>
      </Container>
      {hasDiscount && (
        <Container>
          <SmallText>discount:</SmallText>
          <PriceText smallText={true}>{discountAmount} % </PriceText>
        </Container>
      )}
    </>
  );
};

export default PriceSection;
