import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as muiModules from '../../mui-modules';
import style from './style';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('لابتوب');
  const navigate = useNavigate();
  const searchRequest = (string) => navigate(`/product/${string}`);

  return (
    <muiModules.Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 400,
        height: 40,
      }}
      onSubmit={(e) => {
        e.preventDefault();
        searchRequest(inputValue);
      }}
    >
      <muiModules.InputBase
        sx={{ mr: 1, flex: 1 }}
        placeholder="البحث الأن"
        inputProps={{ 'aria-label': 'البحث عن إعلان منتج' }}
        title="البحث عن المنتج عن طريق الإسم"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <muiModules.Button
        type="submit"
        aria-label="search"
        title="بحث"
        variant="contained"
        sx={style.searchBar.btn}
      >
        بحث
      </muiModules.Button>
    </muiModules.Paper>
  );
};
export default SearchBox;
