import React, {useContext} from 'react';
import { Container, Tags } from './cardStyles';
import { ProductContext } from './content';
import { Product } from '../types';

const PromotionTags = () => {
  const product: Product = useContext(ProductContext);

  return (
    <Container>
      {product.promotions.map(
        (promo: any) => promo.active && <Tags key={promo._id}>{promo.code}</Tags>
      )}
    </Container>
  );
};

export default PromotionTags;
