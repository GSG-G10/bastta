/* eslint-disable react/prop-types */
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';

const Sncakbar = ({ message }) => {
  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  );
};
export default Sncakbar;
