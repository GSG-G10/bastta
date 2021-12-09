/* eslint-disable react/prop-types */
import * as muiModules from '../../mui-modules';
import Form from './Form';

import * as assets from '../../assets';
import * as style from './style';

const NewAdsForm = ({ category, setOpenForm, setOpen }) => (
  <>
    <muiModules.Box sx={style.logoBox}>
      <img src={assets.logo} alt="logo" />
    </muiModules.Box>
    <muiModules.Box>
      <muiModules.Button
        startIcon={<muiModules.ArrowForwardIosIcon />}
        onClick={() => setOpenForm((c) => !c)}
      >
        الرجوع للخلف
      </muiModules.Button>
    </muiModules.Box>
    <Form category={category} setOpen={setOpen} setOpenForm={setOpenForm} />
  </>
);

export default NewAdsForm;
