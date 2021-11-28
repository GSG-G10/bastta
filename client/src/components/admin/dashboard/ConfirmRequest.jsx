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
import { useDispatch } from 'react-redux';
import * as muiModules from '../../../mui-modules';
import * as actions from '../../../store/actions';

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
    color: 'white',
    '&:hover': { backgroundColor: 'red' },
    cursor: 'pointer',
  },
  greenButtonHover: {
    color: 'white',
    '&:hover': { backgroundColor: 'green' },
    cursor: 'pointer',
  },
};

const ConfirmRequest = ({
  title,
  id,
  method,
  type,
  operation,
  row,
  dataType,
}) => {
  // States

  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [notification, setNotification] = useState({
    status: false,
    type: null,
  });
  // Variables
  const dispatch = useDispatch();
  const deleteMemberRowTable = (rowId) => dispatch(actions.deleteMemberRow(rowId));
  const deleteProductRowTable = (rowId) => dispatch(actions.deleteProductRow(rowId));
  const deletePendingRowTable = (rowId) => dispatch(actions.deletePendingRow(rowId));

  // Handlers
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Request
  const idAction = async (queryId) => {
    try {
      const idActionResponse = await axios({
        method,
        url: `/api/v1/admin/${type}/${queryId}`,
      });
      setNotification({ status: true, type: 'success' });
      setResponseMessage(idActionResponse.data.message);
      switch (dataType) {
        case 'members': {
          return deleteMemberRowTable(row.id);
        }
        case 'published': {
          return deleteProductRowTable(row.id);
        }
        case 'pending': {
          return deletePendingRowTable(row.id);
        }
        default:
          return null;
      }
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

  const buttonIcon = () => {
    switch (operation) {
      case 'remove':
        return <muiModules.DeleteOutlineIcon />;
      case 'reject':
        return <muiModules.RemoveCircleOutlineIcon />;
      case 'accept':
        return <muiModules.CheckCircleOutlineIcon />;
      default:
        return <muiModules.SettingsIcon />;
    }
  };

  return (
    <>
      {notification.status ? responseStatus(responseMessage) : null}
      <div>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          sx={
            operation === 'accept'
              ? hover.greenButtonHover
              : hover.redButtonHover
          }
        >
          {buttonIcon()}
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
              {method === 'delete' ? ' حذف ' : ' رفض '}
              {type === 'products' ? ' المنتج ' : ' المستخدم '}
              التالي
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              إلغاء
            </Button>
            <Button
              onClick={() => {
                idAction(id);
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
export default ConfirmRequest;
