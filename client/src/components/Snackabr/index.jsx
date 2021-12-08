/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as muiModules from '../../mui-modules';
import { showMessage } from '../../store/actions';

const Sncakbar = ({ message, type }) => {
  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const dispatch = useDispatch();

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
    dispatch(showMessage('', ''));
  };

  return (

    <muiModules.Snackbar
      anchorOrigin={{ vertical, horizontal }}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
      sx={{ width: 'fit-content', zIndex: '-20' }}
    >
      <muiModules.Alert severity={type}>{message}</muiModules.Alert>
    </muiModules.Snackbar>
  );
};
export default Sncakbar;
