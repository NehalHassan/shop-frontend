import React, { useContext } from 'react';
import PriceSection from './price_section';
import DiscountSection from './discount_section';
import PromotionTags from './promotion_tag';
import { CardHeader } from './cardStyles';
import { ProductContext } from './content';
import { Product } from '../types';

const Card = () => {
  const product: Product = useContext(ProductContext);

  return (
    <>
      <CardHeader>{product.name}</CardHeader>
      <PriceSection />
      <DiscountSection />
      <PromotionTags />
    </>
  );
};

export default Card;
