/* eslint-disable consistent-return */
import { useState } from 'react';
import axios from 'axios';
import propTypes from 'prop-types';

import {
  InputLabel, Select, MenuItem, Button, TextField,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';

import cities from './cities';
import { types, sections } from '../../assets/sections-types';
import Price from './Price';

import style from './style';

const initialState = {
  city: '',
  section: '',
  type: '',
  min: 0,
  max: 100000,
  search: '',
};
const Filter = ({
  setData, setCount, setIsLoaded,
}) => {
  const [typesArr, setTypesArr] = useState(types[1].typesArr);
  const [params, setParams] = useState(initialState);

  const handleInputChange = (e) => {
    if (e.target.name === 'section') {
      setParams((prev) => ({ ...prev, section: e.target.value }));
      setTypesArr(types.filter((ele) => ele.section === e.target.value)[0].typesArr);
    }
    return setParams((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const searchRequest = async () => {
    setIsLoaded(false);
    const response = await axios.get(`/api/v1/products/search?q=${params.search}`);
    if (!response.data) {
      setIsLoaded(true);
      return setData([]);
    }
    setData(response.data);
    setCount(1);
    setParams(initialState);
    return setIsLoaded(true);
  };

  const filterRequest = async () => {
    setIsLoaded(false);
    const response = await axios.get(`
    /api/v1/products/filter?city=${params.city}&section=${params.section}&type=${params.type}&min=${params.min}&max=${params.max}
    `);
    if (!response.data) {
      setData([]);
      return setIsLoaded(true);
    }
    setIsLoaded(true);
    setData(response.data.data);
    setCount(1);
  };

  const onSubmit = () => {
    if (params.search) {
      return searchRequest();
    }
    filterRequest();
  };

  const clearFilters = () => {
    setParams(initialState);
  };

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

  return (
    <div className="form-container" style={style.container}>
      <h2 style={style.containerHeading}>
        فلترة
      </h2>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <InputLabel id="city-select" sx={style.formLabel}>
          <LocationOnOutlinedIcon sx={style.icons} />
          المدينة
        </InputLabel>
        <Select
          id="city"
          value={params.city}
          label="المدينة"
          MenuProps={MenuProps}
          placeholder="اختر المدينة"
          sx={style.select}
          onChange={handleInputChange}
          name="city"
        >
          {cities.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>

        <InputLabel id="city-select" sx={style.formLabel}>
          <FormatListBulletedTwoToneIcon sx={style.icons} />
          {' '}
          القسم
        </InputLabel>
        <Select
          id="section"
          value={params.section}
          label="القسم"
          MenuProps={MenuProps}
          placeholder="اختر القسم"
          sx={style.select}
          onChange={handleInputChange}
          name="section"
        >
          {sections.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>
        <InputLabel id="city-select" sx={style.formLabel}>
          <FormatListBulletedTwoToneIcon sx={style.icons} />
          {' '}
          الصنف
        </InputLabel>
        <Select
          id="type"
          value={params.type}
          label="الصنف"
          MenuProps={MenuProps}
          placeholder="اختر الصنف"
          sx={style.select}
          onChange={handleInputChange}
          name="type"
        >
          {typesArr.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>

        <Price setParams={setParams} value={[params.min, params.max].join('-')} />
        <div className="search" style={style.search}>
          <InputLabel id="search" sx={style.formLabel}>
            كلمات مفتاحية
          </InputLabel>
          <TextField fullWidth onChange={handleInputChange} name="search" placeholder="لابتوب، اكسسوارات، موبايل ..." />
        </div>
        <div className="btns" style={style.btns}>

          <Button
            type="submit"
            variant="contained"
            sx={style.srchBtn}
            onClick={onSubmit}
          >
            {' '}
            عرض نتائج البحث
            {' '}

          </Button>
          <Button variant="text" sx={style.clearBtn} size="small" onClick={clearFilters}>مسح جميع التصنيفات</Button>
        </div>
      </form>
    </div>
  );
};
Filter.propTypes = {
  setData: propTypes.func.isRequired,
  setCount: propTypes.func.isRequired,
  setIsLoaded: propTypes.func.isRequired,

};
export default Filter;
