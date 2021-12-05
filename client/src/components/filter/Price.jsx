import {
  Radio, RadioGroup, FormControlLabel, FormControl, FormLabel,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { price } from '../../store/actions/filter-actions';
import style from './style';

const Price = () => {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (e, newValue) => dispatch(price(newValue.split('-')));
  return (
    <div>
      <FormControl component="fieldset" sx={{ width: '70%' }}>
        <FormLabel component="legend">السعر</FormLabel>
        <RadioGroup
          column="true"
          aria-label="Price"
          name="price"
          value={filter.price}
          onChange={handleChange}
          sx={style.price}
        >
          <FormControlLabel value="0-199" control={<Radio />} label="0-199" />
          <FormControlLabel value="200-499" control={<Radio />} label="200-499" />
          <FormControlLabel value="500-999" control={<Radio />} label="500-999" />
          <FormControlLabel value="1000" control={<Radio />} label="1000+" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
export default Price;
