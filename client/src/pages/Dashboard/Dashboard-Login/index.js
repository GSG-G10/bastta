import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import * as muiModules from '../../../mui-modules';

const sx = {
  Box: {
    height: '98vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '30%',
    display: 'flex',
  },
  passwordInput: {
    width: '75%',
    marginLeft: '1rem',
  },
  alert: {
    width: '100%',
  },
};
const DashboardLogin = () => {
  const [pass, setPass] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [open, setOpen] = useState({ status: false, type: null });

  const navigate = useNavigate();

  useEffect(
    () => (Cookies.get('Admin_login') === 'true' ? navigate('/dashboard') : null),
    [],
  );
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const loginStatus = (message) => (
    <muiModules.Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <muiModules.Alert
        onClose={handleClose}
        severity={open.type}
        sx={sx.Alert}
      >
        {message}
      </muiModules.Alert>
    </muiModules.Snackbar>
  );

  const handleLogin = async (password) => {
    if (password.length < 8) {
      setOpen({ status: true, type: 'error' });
      return setLoginMessage('Password is too short');
    }
    try {
      const response = await axios.post('/api/v1/admin/login', { password });
      Cookies.set('Admin_login', true);
      setOpen({ status: true, type: 'success' });
      setLoginMessage(response.data.message);
      return navigate('/dashboard');
    } catch (e) {
      setOpen({ status: true, type: 'error' });
      return setLoginMessage(e.response.data);
    }
  };
  return (
    <>
      {open.status ? loginStatus(loginMessage) : null}
      <muiModules.Box sx={sx.Box}>
        <form
          style={sx.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(pass.trim());
          }}
        >
          <muiModules.TextField
            sx={sx.passwordInput}
            id="password"
            type="password"
            placeholder="كلمة المرور"
            onChange={(e) => setPass(e.target.value)}
            require
          />
          <muiModules.Button
            sx={sx.loginButton}
            color="primary"
            variant="contained"
            type="submit"
          >
            تسجيل الدخول
          </muiModules.Button>
        </form>
      </muiModules.Box>
    </>
  );
};
export default DashboardLogin;
