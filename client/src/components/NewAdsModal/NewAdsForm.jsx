/* eslint-disable react/prop-types */

import * as muiModules from '../../mui-modules';

import Form from './Form';

import * as assets from '../../assets';
import * as style from './style';

const NewAdsForm = ({ category, setOpenForm }) => (
  <>
    <muiModules.Box sx={style.logoBox}>
      <img src={assets.logo} alt="logo" />

    </muiModules.Box>
    <muiModules.Box>
      <muiModules.Button onClick={() => setOpenForm((c) => !c)}>
        الرجوع للخلف
      </muiModules.Button>
    </muiModules.Box>
    <Form category={category} />
  </>
);

export default NewAdsForm;
