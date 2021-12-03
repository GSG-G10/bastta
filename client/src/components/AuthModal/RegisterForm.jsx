/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import Sncakbar from '../Snackabr';

import * as muiModules from '../../mui-modules';
import * as utils from '../../utils';

const style = {
  input: {
    width: '75%',
  },
  activeString: {
    color: '#1a6e9a',
    fontWeight: '600',
  },
};

const RegisterForm = ({ setManageModal }) => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [alertMessage, setAlertMessage] = useState({ type: true, message: '' });
  const [openAlert, setOpenAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const AuthProccess = (type, message) => {
    setLoading((c) => !c);
    setTimeout(() => {
      setAlertMessage({ type: true, message });
      setOpenAlert((c) => !c);
      setLoading((c) => !c);
      return type ? window.location.reload() : null;
    }, 2000);
  };
  const RegisterRequest = async (name, email, password, confirmPassword) => {
    try {
      const { data: signupResponse } = await axios.post(
        '/api/v1/users/signup',
        {
          name,
          email,
          password,
          confirmPassword,
        },
      );
      return AuthProccess(true, signupResponse.message);
    } catch (err) {
      return AuthProccess(false, err.response.data.error.message);
    }
  };

  return (
    <>
      {openAlert ? (
        <Sncakbar
          type={alertMessage.type}
          message={utils.schemaErrors[Number(alertMessage.message)]}
        />
      ) : null}

      <muiModules.Typography
        id="modal-title"
        variant="h6"
        component="h1"
        sx={{ textAlign: 'center', height: '10%', padding: '0.5rem 0' }}
      >
        <span style={style.activeString}>إنشاء حساب </span>
        | إتسجيل الدخول
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
          RegisterRequest(
            nameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
          );
        }}
      >
        <muiModules.Box
          sx={{
            height: '70%',
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
              id="label-email"
              variant="subtitle1"
              component="div"
              sx={{ margin: '0.5rem 0' }}
            >
              الإسم
            </muiModules.Typography>

            <muiModules.TextField
              id="name"
              type="text"
              placeholder="الإسم"
              onChange={(e) => setNameInput(e.target.value)}
              require
              sx={{ width: '100%' }}
            />
            <muiModules.Typography
              id="label-email"
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
            <muiModules.Typography
              id="keep-mounted-modal-email"
              variant="subtitle1"
              component="div"
              sx={{ margin: '0.5rem 0' }}
            >
              كلمة المرور
            </muiModules.Typography>

            <muiModules.TextField
              id="keep-mounted-modal-password"
              type="password"
              placeholder="كلمة المرور"
              onChange={(e) => setPasswordInput(e.target.value)}
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
              تأكيد كلمة المرور
            </muiModules.Typography>
            <muiModules.TextField
              id="confirmPassword"
              type="password"
              placeholder="تأكيد كلمة المرور"
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
              require
              sx={{ width: '100%' }}
            />
          </muiModules.Box>

          <muiModules.Button
            onClick={() => setManageModal((c) => !c)}
            sx={{
              border: 'none',
              '&:hover': { border: '1px solid #1a6e9a' },
              margin: '2rem 0 0 0',
            }}
          >
            هل لديك حساب ؟
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
export default RegisterForm;
