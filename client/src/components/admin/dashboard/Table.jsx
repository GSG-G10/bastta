import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import * as moment from 'moment';
import 'moment/locale/ar';

import * as muiModules from '../../../mui-modules';

const columns = {
  members: [
    { id: 'members_name', label: 'الأسم' },
    { id: 'members_email', label: 'البريد الإلكتروني' },
    { id: 'members_remove', label: 'حذف المستخدم' },
  ],
  published: [
    { id: 'published_name', label: 'إسم المنتج' },
    { id: 'published_price', label: 'السعر' },
    { id: 'published_currancy', label: 'العملة' },
    { id: 'published_city', label: 'المدينة' },
    { id: 'published_class', label: 'القسم' },
    { id: 'published_type', label: 'الفئة' },
    { id: 'published_image', label: 'صورة المنتج' },
    { id: 'published_short_description', label: 'وصف مختصر' },
    { id: 'published_phone', label: 'رقم هاتف المعلن', minWidth: '200' },
    { id: 'published_post_date', label: 'تاريخ النشر' },
    { id: 'published_delete_product', label: 'حذف المنتج' },
  ],
  pending: [
    { id: 'pending_name', label: 'إسم المنتج' },
    { id: 'pending_price', label: 'السعر' },
    { id: 'pending_currancy', label: 'العملة' },
    { id: 'pending_city', label: 'المدينة' },
    { id: 'pending_class', label: 'القسم' },
    { id: 'pending_type', label: 'الفئة' },
    { id: 'pending_image', label: 'صورة المنتج' },
    { id: 'pending_short_description', label: 'وصف مختصر' },
    { id: 'pending_phone', label: 'رقم هاتف المعلن' },
    { id: 'pending_post_date', label: 'تاريخ النشر' },
    { id: 'pending_approve_product', label: 'قبول المنتج' },
    { id: 'pending_reject_product', label: 'رفض المنتج' },
  ],
};

const Table = () => {
  const { data } = useSelector((state) => state);
  const [modalSrc, setModalSrc] = useState(null);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({
    status: false,
    type: null,
  });
  const [responseMessage, setResponseMessage] = useState('');
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (modalSrc) {
      return setOpen(true);
    }
    return null;
  }, [modalSrc]);

  const modalStyle = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: '500px',
      height: '500px',
      objectFit: 'cover',
    },
  };
  const deleteUser = async (id) => {
    try {
      const deleteResponse = await axios.delete(`/api/v1/admin/users/${id}`);
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
      <muiModules.Modal open={open} onClose={handleClose}>
        <muiModules.Box sx={modalStyle.body}>
          <img src={modalSrc} alt="alt" style={modalStyle.img} />
        </muiModules.Box>
      </muiModules.Modal>

      <muiModules.Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <muiModules.TableContainer sx={{ maxHeight: 650 }}>
          <muiModules.Table stickyHeader aria-label="sticky table">
            <muiModules.TableHead>
              <muiModules.TableRow>
                {Array.isArray(data.data) && !!data.data[0]
                  ? columns[data.data[0]].map((column) => (
                    <muiModules.TableCell
                      key={column.id}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </muiModules.TableCell>
                  ))
                  : null}
              </muiModules.TableRow>
            </muiModules.TableHead>
            <muiModules.TableBody>
              {Array.isArray(data.data) && !!data.data[1][0]
                ? data.data[1].map((e) => (
                  <muiModules.TableRow>
                    {e.name ? (
                      <muiModules.TableCell align="center">
                        {e.name}
                      </muiModules.TableCell>
                    ) : null}
                    {e.email ? (
                      <muiModules.TableCell align="center">
                        {e.email}
                      </muiModules.TableCell>
                    ) : null}
                    {e.price ? (
                      <muiModules.TableCell align="center">
                        {e.price}
                      </muiModules.TableCell>
                    ) : null}
                    {e.currency ? (
                      <muiModules.TableCell align="center">
                        {e.currency}
                      </muiModules.TableCell>
                    ) : null}
                    {e.city ? (
                      <muiModules.TableCell align="center">
                        {e.city}
                      </muiModules.TableCell>
                    ) : null}
                    {e.class ? (
                      <muiModules.TableCell align="center">
                        {e.class}
                      </muiModules.TableCell>
                    ) : null}
                    {e.type ? (
                      <muiModules.TableCell align="center">
                        {e.type}
                      </muiModules.TableCell>
                    ) : null}
                    {e.images ? (
                      <muiModules.TableCell align="center">
                        <muiModules.Button
                          onClick={() => {
                            setOpen(false);
                            setModalSrc(JSON.parse(e.images)[0].image_1);
                          }}
                        >
                          صورة للمنتج
                        </muiModules.Button>
                      </muiModules.TableCell>
                    ) : null}
                    {e.description ? (
                      <muiModules.TableCell align="center">
                        {e.description.substring(0, 40)}
                        ...
                      </muiModules.TableCell>
                    ) : null}
                    {e.phone ? (
                      <muiModules.TableCell align="center">
                        {e.phone}
                      </muiModules.TableCell>
                    ) : null}
                    {e.post_date ? (
                      <muiModules.TableCell align="center">
                        {moment(e.post_date).local('ar').fromNow()}
                      </muiModules.TableCell>
                    ) : null}

                    {data.data[0] === 'members' ? (
                      <muiModules.TableCell align="center">
                        <muiModules.RemoveCircleOutlineIcon
                          sx={{
                            color: 'gray',
                            '&:hover': { color: 'red' },
                            cursor: 'pointer',
                          }}
                          onClick={() => deleteUser(e.id)}
                        />
                      </muiModules.TableCell>
                    ) : null}
                    {data.data[0] === 'published' ? (
                      <muiModules.TableCell align="center">
                        حذف المنتج
                      </muiModules.TableCell>
                    ) : null}
                    {data.data[0] === 'pending' ? (
                      <muiModules.TableCell align="center">
                        قبول
                      </muiModules.TableCell>
                    ) : null}
                    {data.data[0] === 'pending' ? (
                      <muiModules.TableCell align="center">
                        رفض
                      </muiModules.TableCell>
                    ) : null}
                  </muiModules.TableRow>
                ))
                : null}
            </muiModules.TableBody>
          </muiModules.Table>
        </muiModules.TableContainer>
      </muiModules.Paper>
    </>
  );
};
export default Table;
