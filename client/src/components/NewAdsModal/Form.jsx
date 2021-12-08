/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
// import FormGroup from '@mui/material/FormGroup';
import * as muiModules from '../../mui-modules';

const ceties = [
  'غزة',
  'جباليا',
  'بيت حانون',
  'دير البلح',
  'المغازي',
  'النصيرات',
  'خانيونس',
  'رفح',
  'الخليل',
  'رام الله',
  'جنين',
  'نابلس',
  'القدس',
  'أخرى',
];
const classes = {
  elctronics: 'الإلكترونيات',
  car: 'المركبات',
  house: 'العقارات',
  furniture: 'الأثاث',
  service: 'الخدمات',
  sport: 'الرياضة',
  appliances: 'الأجهزة الكهربائية',
};

const types = {
  elctronics: [
    'Samsung',
    'Apple',
    'Acer',
    'Lenovo',
    'Xiaomi',
    'Dell',
    'Asus',
    'Hp',
    'Google',
    'Toshiba',
    'HTC',
    'Oppo',
    'Huawei',
    'Alcatel',
    'Meziu',
    'غير ذلك',
  ],
  car: [
    'سيارة',
    'جيب',
    'دراجة هوائية',
    'دراجة نارية',
    'شاحنة',
    'باص',
    'غير ذلك',
  ],
  house: ['أراضي', 'عقار للإجار', 'عقار للبيع', 'محل', 'غير ذلك'],
  furniture: [
    'أثاث أطفال',
    'أثاث مكاتب',
    'أرائك، أسرة وصالونات',
    'أطقم الطعام',
    'تسريحة',
    'خزائن',
    'خزائن للكتب',
    'خزائن و دواليب',
    'سرير وأطقم سرير',
    'طاولات',
    'طاولات وعربات المطبخ',
    'كرسي ومقاعد',
    'إضاءة ومراوح',
    'سجاجيد',
    'ستائر',
    'أدوات تحسين المنزل',
    'غير ذلك',
  ],
  service: [
    'محاسب',
    'تصميم معماري',
    'الصحة والجمال',
    'الإنشاءات',
    'خدمة العملاء',
    'تعليم',
    'هندسة',
    'موضة وأزياء',
    'تسويق وإعلان',
    'وسائل إعلام',
    'خدمات لوجيستية',
    'خدمات قانونية',
    'صناعة وتصنيع',
    'الإنترنت',
    'طب ورعاية صحية',
    'وسائل إعلام عبر الانترنت',
    'بضائع التجزئة والمستهلك',
    'أنظمة الأمان',
    'موارد بشرية وتوظيف',
    'تصميم جرافيكي',
    'مأكولات ومشروبات',
    'تنمية الأعمال',
    'غير ذلك',
  ],
  sport: [
    'أجهزة رياضية',
    'أحذية رياضية',
    'أدوات رياضية',
    'ملابس رياضية',
    'كورة ملاعب',
    'أدوات كمال أجسام',
    'مكملات غذائية',
    'غير ذلك',
  ],
  appliances: [
    'ثلاجة',
    'غسالة',
    'مولد كهرباء',
    'مضخة مياه',
    'شاحن بطارية',
    'إنفيرتر',
    'ماكينة فرم',
    'شفاط مطبخ',
    'خلاط',
    'غير ذلك',
  ],
};
const Input = muiModules.styled('input')({
  display: 'none',
});

const request = async (data) => {
  try {
    const response = await axios.post('/api/v1/products', data);
    console.log(response);
  } catch (err) {
    console.log(err.response);
  }
};
// const date = new Date();

const Form = ({ category }) => {
  const [adsData, setAdsData] = useState({
    productName: '',
    price: 10,
    currency: '',
    city: '',
    productClass: category,
    type: '',
    images: [],
    description: '',
    phone: '',
    date: '',
  });
  console.log(category);

  const handleUpload = async (event) => {
    // console.log([...event.target.files]);
    // const file = [...event.target.files];
    const file = event.target.files[0];
    const reader = new FileReader();
    // file.map((e) => {
    reader.onload = (evt) => {
      setAdsData({
        ...adsData,
        images: [...adsData.images, evt.target.result],
      });
    };
    // console.log('file', file[0]);
    return reader.readAsDataURL(file);
    // });
    // eslint-disable-next-line func-names
  };

  console.log(adsData.images);

  // const request = await axios.post('/api/v1/products/upload');
  // const file = [event.target.files];
  // const reader = new FileReader(file);

  // reader.onload = (e) => {
  //   // The file's text will be printed here
  //   console.log(e.target.result);
  // };

  // reader.readAsText(file);

  // const { files } = e.target;
  // // eslint-disable-next-line func-names
  // console.log(files);
  // reader.onload = (evt) => {
  // setAdsData({ ...adsData, images: [evt.target.result] });
  // console.log(evt.target.result);
  // };
  // reader.readAsDataURL(file);

  // const res = await axios({
  //   method: 'post',
  //   url: '/api/v1/products/upload',
  //   file: files[0],
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });

  /* const uploadImages = await axios({
      method: 'post',
      url: '/api/v1/products/upload',
      data: [files[0]],
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(files[0]);
    console.log(uploadImages); */

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(adsData);
        setAdsData({ ...adsData, date: new Date() });
        request(adsData);
      }}
    >
      {/* Product name  */}
      <muiModules.Box>
        <InputLabel>إسم المنتج</InputLabel>
        <muiModules.TextField
          required
          onChange={(elm) => setAdsData({ ...adsData, productName: elm.target.value })}
        />
      </muiModules.Box>

      {/* Product price  */}
      <muiModules.Box>
        <InputLabel> سعر المنتج من 10 إلى 100</InputLabel>
        <muiModules.Slider
          required
          onChange={(elm) => setAdsData({ ...adsData, price: elm.target.value })}
          defaultValue={0}
          step={10}
          marks
          min={10}
          max={100}
          sx={{ width: '50%' }}
        />
        <InputLabel> إدخال السعر يدوي</InputLabel>
        <muiModules.TextField
          onChange={(elm) => setAdsData({ ...adsData, price: elm.target.value })}
          type="number"
          required
          value={adsData.price}
        />
      </muiModules.Box>
      {/* Product currency  */}
      <muiModules.Box>
        <InputLabel>العملة</InputLabel>
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
        <InputLabel>المدينة</InputLabel>
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
        <InputLabel>الفئة</InputLabel>
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
        <InputLabel>وصف المنتج</InputLabel>
        <muiModules.TextField
          onChange={(elm) => setAdsData({ ...adsData, description: elm.target.value })}
          required
          multiline
          sx={{ width: '100%' }}
        />
      </muiModules.Box>
      {/* Product phone  */}
      <muiModules.Box>
        <InputLabel>رقم الهاتف</InputLabel>
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
        <InputLabel>
          صورة للمنتج
          {' '}
          <span>الحد الأقصى 4 صور</span>
        </InputLabel>
        <muiModules.Stack direction="row" alignItems="center" spacing={2}>
          <InputLabel htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              multiple
              type="file"
              accept=".jpg, .jpeg, .png"
              required
              data-multiple-caption={4}
              onChange={handleUpload}
              enctype="multipart/form-data"
            />
            {/* Product currency  */}
            <muiModules.Button variant="contained" component="span">
              رفع الصور
            </muiModules.Button>
          </InputLabel>
        </muiModules.Stack>
      </form>

      {JSON.stringify(adsData)}
      <muiModules.Button type="submit" variant="contained">
        نشر الإعلان
      </muiModules.Button>
    </form>
  );
};
export default Form;
