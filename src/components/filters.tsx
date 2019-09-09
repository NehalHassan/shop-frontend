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
  handleSearchProduct
}: any) => {
  return(
    <FilterWrapper>

      <Search
        placeholder="input search text"
        onSearch={handleSearchProduct}
        style={{ width: 200, margin: '10px' }}
      />

      <Select defaultValue="lucy" style={{ width: 200, margin: '10px' }} onChange={handleChangeDept}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

      <Select defaultValue="lucy" style={{ width: 200, margin: '10px' }} onChange={handleChangePromo}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>

    </FilterWrapper>
  )
};
export default Filters;