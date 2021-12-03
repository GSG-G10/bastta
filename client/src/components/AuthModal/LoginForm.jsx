/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';

import * as muiModules from '../../mui-modules';
import { schemaErrors } from '../../utils';
import { showMessage, createAuth } from '../../store/actions';
import style from './style';

const LoginForm = ({ setManageModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const LoginRequest = async (email, password) => {
    try {
      const {
        data: { message },
      } = await axios.post('/api/v1/users/login', {
        email,
        password,
      });
      setLoading((c) => !c);
      dispatch(showMessage(schemaErrors[Number(message)]), 'success');
      const test = await axios.get('/api/v1/users/isAuth');
      return dispatch(createAuth(test.data));
    } catch (err) {
      return dispatch(
        showMessage(
          schemaErrors[Number(err.response.data.error.message)],
          'error',
        ),
      );
    }
  };
  return (
    <>
      <muiModules.Typography
        id="modal-title"
        variant="h6"
        component="h1"
        sx={{ textAlign: 'center', height: '10%', padding: '0.5rem 0' }}
      >
        <span style={style.activeString}>تسجيل الدخول </span>
        | إنشاء حساب
      </muiModules.Typography>
      <muiModules.Box
        sx={{ display: 'flex', justifyContent: 'center', height: '2.5rem' }}
      >
        {loading ? <muiModules.CircularProgress /> : null}
      </muiModules.Box>
      <form
        style={{
          height: '80%',
          width: '80%',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        onSubmit={(e) => {
          e.preventDefault();
          LoginRequest(emailInput, passwordInput);
        }}
      >
        <muiModules.Box
          sx={{
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 0',
            alignItems: 'flex-start',
          }}
        >
          <muiModules.Box
            sx={{
              width: '100%',
            }}
          >
            <muiModules.Typography
              id="keep-mounted-modal-email"
              variant="subtitle1"
              component="div"
              sx={{ margin: '0.5rem 0' }}
            >
              البريد الإلكتروني
            </muiModules.Typography>

            <muiModules.TextField
              id="keep-mounted-modal-email"
              type="text"
              placeholder="البريد الإلكتروني"
              onChange={(e) => setEmailInput(e.target.value.trim())}
              require
              sx={{ width: '100%' }}
            />
          </muiModules.Box>
          <muiModules.Box sx={{ width: '100%' }}>
            <muiModules.Typography
              id="keep-mounted-modal-password"
              variant="subtitle1"
              component="div"
              sx={{ margin: '0.5rem 0' }}
            >
              كلمة المرور
            </muiModules.Typography>
            <muiModules.TextField
              id="password"
              type="password"
              placeholder="كلمة المرور"
              onChange={(e) => setPasswordInput(e.target.value)}
              require
              sx={{ width: '100%' }}
            />
          </muiModules.Box>

          <muiModules.Button
            onClick={() => setManageModal((c) => !c)}
            sx={{ border: 'none', '&:hover': { border: '1px solid #1a6e9a' } }}
          >
            تسجيل حساب جديد ؟
          </muiModules.Button>
        </muiModules.Box>

        <muiModules.Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '100%', padding: '1rem 0' }}
        >
          تسجيل الدخول
        </muiModules.Button>
      </form>
    </>
  );
};
export default LoginForm;
