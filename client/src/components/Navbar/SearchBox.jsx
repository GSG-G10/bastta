import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as muiModules from '../../mui-modules';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const searchRequest = (string) => navigate(`/product/search/${string}`);

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
        onChange={(e) => setInputValue(e.target.value)}
      />
      <muiModules.Button
        type="submit"
        aria-label="search"
        title="بحث"
        variant="contained"
        sx={{ height: '100%', borderRaduis: '0 0 0 0' }}
      >
        بحث
      </muiModules.Button>
    </muiModules.Paper>
  );
};
export default SearchBox;
