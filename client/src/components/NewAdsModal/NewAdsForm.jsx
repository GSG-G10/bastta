/* eslint-disable react/prop-types */

import * as muiModules from '../../mui-modules';

import Form from './Form';

import * as assets from '../../assets';

const NewAdsForm = ({ category, setOpenForm }) => (
  <>
    <muiModules.Box sx={{ margin: 'auto' }}>
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
