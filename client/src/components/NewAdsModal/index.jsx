import { useState } from 'react';

import * as muiModules from '../../mui-modules';
// import LoginForm from './LoginForm';
// import RegisterForm from './RegisterForm';
import style from './style';

const NewAdsModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <muiModules.Button variant="outlined" onClick={handleOpen}>
        أضف إعلان جديد
      </muiModules.Button>
      <muiModules.Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <muiModules.Box sx={style.modal}>
          <h3>Form is here</h3>
        </muiModules.Box>
      </muiModules.Modal>
    </div>
  );
};
export default NewAdsModal;
