/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import * as muiModules from '../../../mui-modules';
import * as actions from '../../../store/actions';
import * as style from './style';

const PaperComponent = (props) => (
  <muiModules.Draggable
    handle="#draggable-dialog-title"
    cancel={'[class*="MuiDialogContent-root"]'}
  >
    <muiModules.Paper {...props} />
  </muiModules.Draggable>
);

const ConfirmRequest = ({
  title,
  id,
  method,
  type,
  operation,
  row,
  dataType,
  name,
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
        <muiModules.Button
          variant="contained"
          onClick={handleClickOpen}
          sx={
            operation === 'accept'
              ? style.confirmRequest.hover.greenButtonHover
              : style.confirmRequest.hover.redButtonHover
          }
        >
          {buttonIcon()}
        </muiModules.Button>
        <muiModules.Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <muiModules.DialogTitle
            style={{ cursor: 'move' }}
            id="draggable-dialog-title"
          >
            {title}
          </muiModules.DialogTitle>
          <muiModules.DialogContent>
            <muiModules.DialogContentText>
              هل أنت متأكد من
              {method === 'delete' || method === 'reject' ? ' حذف ' : ' قبول '}
              {type === 'products' ? ' المنتج ' : ' المستخدم '}
              {name}
            </muiModules.DialogContentText>
          </muiModules.DialogContent>
          <muiModules.DialogActions>
            <muiModules.Button autoFocus onClick={handleClose}>
              إلغاء
            </muiModules.Button>
            <muiModules.Button
              onClick={() => {
                idAction(id);
                handleClose();
              }}
            >
              تأكيد
            </muiModules.Button>
          </muiModules.DialogActions>
        </muiModules.Dialog>
      </div>
    </>
  );
};
export default ConfirmRequest;
