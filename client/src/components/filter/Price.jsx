import propTypes from 'prop-types';

import {
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel,
} from '@mui/material';
import style from './style';

const Price = ({ setParams, value }) => {
  const handleChange = (e, newValue) => {
    setParams((prev) => ({ ...prev, min: newValue.split('-')[0], max: newValue.split('-')[1] }));
  };
  return (
    <div>
      <FormControl component="fieldset" sx={{ width: '70%' }}>
        <FormLabel component="legend">السعر</FormLabel>
        <RadioGroup
          column="true"
          aria-label="Price"
          name="price"
          value={value}
          onChange={handleChange}
          sx={style.price}
        >
          <FormControlLabel value="0-199" control={<Radio />} label="0-199" />
          <FormControlLabel value="200-499" control={<Radio />} label="200-499" />
          <FormControlLabel value="500-999" control={<Radio />} label="500-999" />
          <FormControlLabel value="1000-1000000" control={<Radio />} label="1000+" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
Price.propTypes = {
  setParams: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
export default Price;
