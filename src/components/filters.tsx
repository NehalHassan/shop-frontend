import React, { useState } from 'react';
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
  setFilters: (x:string, y:string) => void
};

const Filters = ({
  setFilters,
  promotions,
  departments
}: FiltersProps) => {
  const [filters, setFiltersValues] = useState({
    dept:'Departments',
    promo:'Promotion'
  });

  const onChange = (filter: string, value: string) => {
    switch (filter) {
      case 'promotions':
        setFiltersValues({
          dept: 'Departments',
          promo: value
        })
        break;
      case 'department':
        setFiltersValues({
          dept: value,
          promo: 'Promotion'
        })
        break;
      case 'search':
        setFiltersValues({
          dept: 'Departments',
          promo: 'Promotion'
        })
        break;
    }
    setFilters(filter, value);
  }

  return(

    <FilterWrapper>

      <Search
        placeholder="input search text"
        onSearch={(e: string) => onChange('search',e)}
        style={{ width: 200, margin: '10px' }}
      />

      <Select
      value={filters.dept}
        defaultValue="Departments"
        style={{ width: 200, margin: '10px' }}
        onChange={(e: string) => onChange('department', e)}
      >
        {departments && departments.length && departments.map((dept: Department) => (
          <Option key={dept._id} value={dept._id}>{dept.name}</Option>
        ))}
      </Select>

      <Select
        value={filters.promo}
        defaultValue="Promotion"
        style={{ width: 200, margin: '10px' }}
        onChange={(e: string) => onChange('promotions', e)}
      >
        {promotions && promotions.length && promotions.map(
          (promo: Promotion) => <Option key={promo._id} value={promo._id}>{promo.code}</Option>
        )}
      </Select>

    </FilterWrapper>

  )
};
export default Filters;