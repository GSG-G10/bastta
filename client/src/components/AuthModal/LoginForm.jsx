/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

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
      const response = await axios.get('/api/v1/users/isAuth');
      setTimeout(() => window.location.reload(), 0);
      return dispatch(createAuth(response.data));
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
        sx={{ textAlign: 'center', padding: '0.5rem 0' }}
      >
        <span style={style.activeString}>تسجيل الدخول </span>
        | إنشاء حساب
      </muiModules.Typography>
      <muiModules.Box
        sx={{ display: 'flex', justifyContent: 'center' }}
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
              require="true"
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
              require="true"
              sx={{ width: '100%' }}
            />
          </muiModules.Box>

          <muiModules.Button
            onClick={() => setManageModal((c) => !c)}
            sx={{ border: 'none', margin: '0.5rem 0' }}
          >
            تسجيل حساب جديد ؟
          </muiModules.Button>
        </muiModules.Box>

        <muiModules.Button
          variant="contained"
          type="submit"
          color="primary"
          sx={{ width: '100%', padding: '0.5rem 0' }}
        >
          تسجيل الدخول
        </muiModules.Button>
      </form>
    </>
  );
};
export default LoginForm;
