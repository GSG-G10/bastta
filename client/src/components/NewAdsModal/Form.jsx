/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as muiModules from '../../mui-modules';

import { showMessage } from '../../store/actions';
import {
  schemaErrors, types, classes, ceties,
} from '../../utils';
import * as style from './style';

const Input = muiModules.styled('input')({
  display: 'none',
});

const Form = ({ category, setOpen, setOpenForm }) => {
  const dispatch = useDispatch();
  const [adsData, setAdsData] = useState({
    name: '',
    price: 10,
    currency: '',
    city: '',
    section: classes[category],
    type: '',
    images: [],
    description: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const handleUpload = (event) => {
    if (event.target.files.length > 4) return dispatch(showMessage('الحد الأقصى للصور 4', 'error'));

    const file = event.target.files;
    const arr = Object.keys(file);
    return arr.forEach((e) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        setAdsData((prevState) => ({
          ...prevState,
          images: [...prevState.images, evt.target.result],
        }));
      };
      reader.readAsDataURL(file[e]);
    });
  };
  const request = async (content) => {
    if (content.images.length === 0) {
      dispatch(showMessage('يرجى وضع صورة واحدة على الأقل للمنتج', 'error'));
      return;
    }
    try {
      setLoading(true);
      const {
        data: { message },
      } = await axios.post('/api/v1/products', content);
      setOpenForm((c) => !c);
      setAdsData({
        name: '',
        price: 10,
        currency: '',
        city: '',
        section: classes[category],
        type: '',
        images: [],
        description: '',
        phone: '',
      });
      dispatch(showMessage(schemaErrors[Number(message)]), 'success');
      setOpen((c) => !c);
    } catch (err) {
      setLoading(false);
      dispatch(showMessage(schemaErrors[1016], 'error'));
    }
  };

  return (
    <muiModules.Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        request(adsData);
      }}
      sx={style.form.body}
    >
      {/* Product name  */}
      <muiModules.Box sx={style.form.name}>
        <muiModules.InputLabel>إسم المنتج</muiModules.InputLabel>
        <muiModules.TextField
          sx={style.form.nameInput}
          required
          onChange={(elm) => setAdsData({ ...adsData, name: elm.target.value })}
        />
      </muiModules.Box>

      {/* Product price  */}
      <muiModules.Box sx={style.form.priceBox}>
        <muiModules.Box sx={style.form.priceSlider}>
          <muiModules.InputLabel> سعر المنتج 10-100</muiModules.InputLabel>
          <muiModules.Slider
            required
            onChange={(elm) => setAdsData({ ...adsData, price: elm.target.value })}
            defaultValue={0}
            step={10}
            marks
            min={10}
            max={100}
          />
        </muiModules.Box>
        <muiModules.Box>
          <muiModules.InputLabel> إدخال السعر يدوي</muiModules.InputLabel>
          <muiModules.TextField
            sx={style.form.priceInput}
            onChange={(elm) => setAdsData({ ...adsData, price: elm.target.value })}
            type="number"
            InputProps={{ inputProps: { min: 0 } }}
            required
            value={adsData.price}
          />
        </muiModules.Box>
      </muiModules.Box>
      {/* Product currency  */}
      <muiModules.Box>
        <muiModules.InputLabel>العملة</muiModules.InputLabel>
        <muiModules.Select
          onChange={(elm) => setAdsData({ ...adsData, currency: elm.target.value })}
          placeholder="ddsd"
          required
          sx={{ width: '100%' }}
        >
          <muiModules.MenuItem value="شيكل">شيكل</muiModules.MenuItem>
          <muiModules.MenuItem value="دولار">دولار</muiModules.MenuItem>
        </muiModules.Select>
      </muiModules.Box>
      {/* city  */}
      <muiModules.Box>
        <muiModules.InputLabel>المدينة</muiModules.InputLabel>
        <muiModules.Select
          onChange={(elm) => setAdsData({ ...adsData, city: elm.target.value })}
          required
          sx={{ width: '100%' }}
        >
          {ceties.map((e) => (
            <muiModules.MenuItem value={e}>{e}</muiModules.MenuItem>
          ))}
        </muiModules.Select>
      </muiModules.Box>
      {/* Product class  */}
      <muiModules.Box>
        <muiModules.Typography variant="subtitle1">
          قسم
          {' '}
          {classes[category]}
        </muiModules.Typography>
      </muiModules.Box>
      {/* Product type  */}
      <muiModules.Box>
        <muiModules.InputLabel>الفئة</muiModules.InputLabel>
        <muiModules.Select
          sx={{ width: '100%' }}
          onChange={(elm) => setAdsData({ ...adsData, type: elm.target.value })}
          required
        >
          {types[category].map((e) => (
            <muiModules.MenuItem value={e}>{e}</muiModules.MenuItem>
          ))}
        </muiModules.Select>
      </muiModules.Box>
      {/* Product description  */}
      <muiModules.Box>
        <muiModules.InputLabel>وصف المنتج</muiModules.InputLabel>
        <muiModules.TextField
          onChange={(elm) => setAdsData({ ...adsData, description: elm.target.value })}
          required
          multiline
          sx={{ width: '100%' }}
        />
      </muiModules.Box>
      {/* Product phone  */}
      <muiModules.Box>
        <muiModules.InputLabel>رقم الهاتف</muiModules.InputLabel>
        <muiModules.TextField
          onChange={(elm) => setAdsData({ ...adsData, phone: elm.target.value })}
          required
          value={adsData.phone}
          placeholder="05x x xxx xxx"
          sx={{ width: '100%' }}
        />
      </muiModules.Box>
      {/* Product images  */}
      <form>
        <muiModules.InputLabel>
          صورة للمنتج
          <muiModules.Typography variant="caption">
            {' '}
            الحد الأقصى 4
            {' '}
          </muiModules.Typography>
        </muiModules.InputLabel>
        <muiModules.Stack direction="row" alignItems="center" spacing={2}>
          <muiModules.InputLabel htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              multiple
              type="file"
              accept=".jpeg, .jpg"
              required
              data-multiple-caption={4}
              onChange={handleUpload}
              enctype="multipart/form-data"
            />
            {/* Product currency  */}
            <muiModules.Button variant="contained" component="span">
              رفع الصور
            </muiModules.Button>
          </muiModules.InputLabel>
          <muiModules.Typography variant="caption">
            {adsData.images.length
              ? `الصور ${adsData.images.length}`
              : 'لم تختر صور للمنتج'}
          </muiModules.Typography>
        </muiModules.Stack>
      </form>

      <muiModules.Box sx={style.form.submitBtn}>
        <muiModules.Button
          type="submit"
          variant="contained"
          sx={style.form.submitBtn}
          disabled={loading}
        >
          نشر الإعلان
        </muiModules.Button>
        {loading ? <muiModules.CircularProgress /> : null}
      </muiModules.Box>
    </muiModules.Box>
  );
};
export default Form;
