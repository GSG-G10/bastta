/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as muiModules from '../../../mui-modules';
import * as style from './style';

const ImageModal = ({ imageSrc }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <muiModules.Button onClick={handleOpen}>
        <muiModules.RemoveRedEyeIcon />
      </muiModules.Button>
      <muiModules.Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <muiModules.Box
          sx={{ ...style.imageModal, backgroundImage: `url(${imageSrc})` }}
        />
      </muiModules.Modal>
    </div>
  );
};
export default ImageModal;
