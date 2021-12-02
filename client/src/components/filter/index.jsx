import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  InputLabel, Select, MenuItem, Button, TextField,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';

import {
  city, type, section, filteredData, clear,
} from '../../store/actions/filter-actions';
import cities from './cities';
import { types, sections } from '../../assets/sections-types';
import Price from './Price';

import style from './style';

const Filter = () => {
  const [data, setData] = useState([]);
  const [typesArr, setTypesArr] = useState(types[1].typesArr);
  const { filter } = useSelector((state) => state);

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

  const searchRequest = async (value) => {
    const response = await axios.get(`/api/v1/products/search?q=${value}`);
    if (!response.data) {
      return [];
    }
    dispatch(clear());
    return dispatch(filteredData(response.data.data));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { search: searchInput } = e.target.elements;
    searchRequest(searchInput.value);
  };

  const clearFilters = () => {
    dispatch(clear());
    dispatch(filteredData(data));
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
      <form className="form" onSubmit={onSubmit}>
        <InputLabel id="city-select" sx={style.formLabel}>
          <LocationOnOutlinedIcon sx={style.icons} />
          {' '}
          المدينة
        </InputLabel>
        <Select
          id="city"
          value={filter.city}
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
          value={filter.section}
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
          value={filter.type}
          label="الصنف"
          MenuProps={MenuProps}
          placeholder="اختر الصنف"
          sx={style.select}
          onChange={handleInputChange}
          name="type"
        >
          {typesArr.map((ele) => <MenuItem key={ele} value={ele}>{ele}</MenuItem>)}
        </Select>

        <Price />
        <div className="search" style={style.search}>
          <InputLabel id="search" sx={style.formLabel}>
            كلمات مفتاحية
          </InputLabel>
          <TextField required fullWidth name="search" placeholder="لابتوب، اكسسوارات، موبايل ..." />
        </div>
        <div className="btns" style={style.btns}>

          <Button
            type="submit"
            variant="contained"
            sx={style.srchBtn}
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
export default Filter;
