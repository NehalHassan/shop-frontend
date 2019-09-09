import React from 'react';
import styled from '@emotion/styled';

import { Select, Input } from 'antd';


const { Search } = Input;
const { Option } = Select;

const FilterWrapper = styled.div({
  display: 'flex',
  flexFlow: 'row-reverse',
  margin: '30px 210px',
})


const Filters = ({
  handleChangeDept,
  handleChangePromo,
  handleSearchProduct,
  promotions,
  departments
}: any) => {
  return(
    <FilterWrapper>

      <Search
        placeholder="input search text"
        onSearch={handleSearchProduct}
        style={{ width: 200, margin: '10px' }}
      />

      <Select defaultValue="Departments" style={{ width: 200, margin: '10px' }} onChange={handleChangeDept}>
        {departments && departments.length && departments.map((dept:any) => (
          <Option value={dept._id}>{dept.name}</Option>
        ))}
      </Select>

      <Select defaultValue="Promotion" style={{ width: 200, margin: '10px' }} onChange={handleChangePromo}>
        {promotions && promotions.length && promotions.map(
          (promo:any) => <Option value={promo._id}>{promo.code}</Option>
        )}
      </Select>

    </FilterWrapper>
  )
};
export default Filters;