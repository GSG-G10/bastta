/* eslint-disable react/prop-types */
import { useState } from 'react';

import * as muiModules from '../../../mui-modules';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 800,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

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
          sx={{ ...style, backgroundImage: `url(${imageSrc})` }}
        />
      </muiModules.Modal>
    </div>
  );
};
export default ImageModal;
