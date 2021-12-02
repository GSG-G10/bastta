import { useState } from 'react';

import * as muiModules from '../../mui-modules';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import style from './style';

const AuthModal = () => {
  const [manageModal, setManageModal] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <muiModules.Button onClick={handleOpen}>
        <muiModules.AccountCircleIcon fontSize="large" />
      </muiModules.Button>
      <muiModules.Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <muiModules.Box sx={style.modal}>
          {manageModal ? (
            <LoginForm setManageModal={setManageModal} />
          ) : (
            <RegisterForm setManageModal={setManageModal} />
          )}
        </muiModules.Box>
      </muiModules.Modal>
    </div>
  );
};
export default AuthModal;
