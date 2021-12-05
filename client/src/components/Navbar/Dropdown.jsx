import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import * as muiModules from '../../mui-modules';

import { showMessage } from '../../store/actions';
import { schemaErrors } from '../../utils';
import style from './style';

const Dropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutRequest = async () => {
    try {
      const {
        data: { message },
      } = await axios.get('/api/v1/users/logout');
      dispatch(showMessage(schemaErrors[Number(message)]), 'success');
      setTimeout(() => window.location.reload(), 0);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err.response);
    }
  };

  return (
    <div>
      <muiModules.Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <muiModules.AccountCircleIcon fontSize="large" />
      </muiModules.Button>
      <muiModules.Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <muiModules.MenuItem sx={style.profile} onClick={() => navigate('/profile')}>
          الصفحة الشخصية
        </muiModules.MenuItem>
        <muiModules.MenuItem sx={style.logout} onClick={() => logoutRequest()}>
          تسجيل الخروج
        </muiModules.MenuItem>
      </muiModules.Menu>
    </div>
  );
};
export default Dropdown;
