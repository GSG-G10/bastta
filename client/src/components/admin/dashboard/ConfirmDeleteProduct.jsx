/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import axios from 'axios';
import * as muiModules from '../../../mui-modules';

const PaperComponent = (props) => (
  <Draggable
    handle="#draggable-dialog-title"
    cancel={'[class*="MuiDialogContent-root"]'}
  >
    <Paper {...props} />
  </Draggable>
);
const hover = {
  redButtonHover: {
    color: 'primary.main',
    '&:hover': { color: 'red', border: '1px solid red' },
    cursor: 'pointer',
  },
};

const ConfirmDeleteProduct = ({ title, productId, type }) => {
  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [notification, setNotification] = useState({
    status: false,
    type: null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteUser = async (id) => {
    try {
      const deleteResponse = await axios.delete(`/api/v1/admin/products/${id}`);
      setNotification({ status: true, type: 'success' });
      return setResponseMessage(deleteResponse.data.message);
    } catch (e) {
      setNotification({ status: true, type: 'error' });
      return setResponseMessage(e.response.data.message);
    }
  };
  const responseStatus = (message) => (
    <muiModules.Snackbar
      open={notification}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <muiModules.Alert onClose={handleClose} severity={notification.type}>
        {message}
      </muiModules.Alert>
    </muiModules.Snackbar>
  );
  return (
    <>
      {notification.status ? responseStatus(responseMessage) : null}
      <div>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={hover.redButtonHover}
        >
          <muiModules.DeleteOutlineIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              هل أنت متأكد من
              {type}
              المنتج التالي
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              إلغاء
            </Button>
            <Button
              onClick={() => {
                deleteUser(productId);
                handleClose();
              }}
            >
              تأكيد
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default ConfirmDeleteProduct;
