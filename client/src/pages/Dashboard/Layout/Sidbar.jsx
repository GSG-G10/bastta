import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

// import PublicView from './PublicView';

import * as muiModules from '../../../mui-modules';
import * as assets from '../../../assets';

const sx = {
  Box: {
    bgcolor: 'background.paper',
    width: '350px',
    display: 'flex',
    height: '98vh',
  },

  AppBar: {
    width: '100%',
  },
  logoImg: {
    width: '80%',
    height: '25%',
    borderRadius: 0,
    margin: 'auto',
  },
  title: {
    width: '50%',
    margin: 'auto',
    marginBottom: '3rem',
  },
};

const Sidbar = () => {
  const navigate = useNavigate();

  useEffect(
    () => (!Cookies.get('Admin_login') ? navigate('/admin') : null),
    [],
  );

  const logoutHandler = () => {
    Cookies.remove('Admin_login');
    axios.get('/api/v1/admin/logout');
    navigate('/admin');
  };

  return (
    <muiModules.Box sx={sx.Box}>
      <muiModules.AppBar sx={sx.AppBar} position="static">
        <muiModules.Tabs
          orientation="vertical"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="full width tabs example"
        >
          <img src={assets.LogoTransparent} alt="logo" style={sx.logoImg} />
          <muiModules.Typography variant="h5" style={sx.title}>
            لوحة تحكم الإدارة
          </muiModules.Typography>
          <muiModules.Tab
            icon={<muiModules.DataThresholdingIcon />}
            label="نظرة عامة"
          />
          <muiModules.Tab
            icon={<muiModules.KeyboardReturnIcon />}
            label="العودة للصفحة الرئيسية"
            onClick={() => navigate('/')}
          />
          <muiModules.Tab
            icon={<muiModules.LogoutIcon />}
            label="تسجيل الخروج"
            onClick={() => logoutHandler()}
          />
        </muiModules.Tabs>
      </muiModules.AppBar>
    </muiModules.Box>
  );
};
export default Sidbar;
