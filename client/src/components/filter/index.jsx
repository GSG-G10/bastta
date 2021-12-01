import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  InputLabel, Select, MenuItem, Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  city, type, section, filteredData, clear,
} from '../../store/actions/filter-actions';
import cities from './cities';
import { types, sections } from '../../assets/sections-types';
import Price from './Price';

const Filter = () => {
  const [data, setData] = useState([]);
  const [typesArr, setTypesArr] = useState(types[1].typesArr);
  const { filter } = useSelector((state) => state);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/v1/products/public');
      if (!response.data) {
        return [];
      }
      dispatch(filteredData(response.data.data));
      return setData(response.data.data);
    };
    fetchData();
  }, []);
  const handleInputChange = (e) => {
    switch (e.target.name) {
      case 'city':
        return dispatch(city(e.target.value));
      case 'section':
        dispatch(section(e.target.value));
        return setTypesArr(types.filter((ele) => ele.section === e.target.value)[0].typesArr);
      case 'type':
        return dispatch(type(e.target.value));
      default: return '';
    }
  };

  const clearFilters = () => {
    dispatch(clear());
    dispatch(filteredData(data));
  };

  return (
    <div className="form-container">
      <h2>
        فلترة
      </h2>
      <form className="form">
        <InputLabel id="city-select">المدينة</InputLabel>
        <Select
          labelId="city-select"
          id="city"
          value={filter.city}
          label="المدينة"
          MenuProps={MenuProps}
          placeholder="اختر المدينة"
          sx={{
            width: 300,
          }}
          onChange={handleInputChange}
          name="city"
        >
          {cities.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>

        <InputLabel id="city-select">القسم</InputLabel>
        <Select
          labelId="section-select"
          id="section"
          value={filter.section}
          label="القسم"
          MenuProps={MenuProps}
          placeholder="اختر القسم"
          sx={{
            width: 300,
          }}
          onChange={handleInputChange}
          name="section"
        >
          {sections.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>
        <InputLabel id="city-select">الصنف</InputLabel>
        <Select
          labelId="type-select"
          id="type"
          value={filter.type}
          label="الصنف"
          MenuProps={MenuProps}
          placeholder="اختر الصنف"
          sx={{
            width: 300,
          }}
          onChange={handleInputChange}
          name="type"
        >
          {typesArr.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>

        <Price />
      </form>
      <Button variant="outlined" onClick={clearFilters}>مسح جميع التصنيفات</Button>
    </div>
  );
};
export default Filter;
