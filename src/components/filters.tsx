import React from 'react';
import styled from '@emotion/styled';

import { Select, Input } from 'antd';
import { Promotion, Department } from '../types';


const { Search } = Input;
const { Option } = Select;

const FilterWrapper = styled.div({
  display: 'flex',
  flexFlow: 'row-reverse',
  margin: '30px 7vw',
})

interface FiltersProps {
  promotions: Promotion[],
  departments: Department[],
  handleChangeDept: (x: string) => void,
  handleChangePromo: (x: string) => void
  handleSearchProduct: (x: string) => void
};

const Filters = ({
  handleChangeDept,
  handleChangePromo,
  handleSearchProduct,
  promotions,
  departments
}: FiltersProps) => {

  return(

    <FilterWrapper>

      <Search
        placeholder="input search text"
        onSearch={handleSearchProduct}
        style={{ width: 200, margin: '10px' }}
      />

      <Select defaultValue="Departments" style={{ width: 200, margin: '10px' }} onChange={handleChangeDept}>
        {departments && departments.length && departments.map((dept: Department) => (
          <Option value={dept._id}>{dept.name}</Option>
        ))}
      </Select>

      <Select defaultValue="Promotion" style={{ width: 200, margin: '10px' }} onChange={handleChangePromo}>
        {promotions && promotions.length && promotions.map(
          (promo: Promotion) => <Option value={promo._id}>{promo.code}</Option>
        )}
      </Select>

    </FilterWrapper>

  )
};
export default Filters;