import { useSelector } from 'react-redux';

import * as moment from 'moment';
import 'moment/locale/ar';

import ImageModal from './ImageModal';
import ConfirmRequest from './ConfirmRequest';

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
  const { data: stateData } = useSelector((state) => state);

  return (
    <muiModules.Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <muiModules.TableContainer sx={{ maxHeight: 650 }}>
        <muiModules.Table stickyHeader aria-label="sticky table">
          <muiModules.TableHead>
            <muiModules.TableRow>
              {columns[stateData.viewTitle].map((column) => (
                <muiModules.TableCell
                  key={column.id}
                  align="center"
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </muiModules.TableCell>
              ))}
            </muiModules.TableRow>
          </muiModules.TableHead>
          <muiModules.TableBody>
            {stateData.viewData.length
              && stateData.viewData.map((e) => (
                <muiModules.TableRow key={e.id}>
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
                      <ImageModal imageSrc={JSON.parse(e.images)[0].image_1} />
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

                  {stateData.viewTitle === 'members' ? (
                    <muiModules.TableCell align="center">
                      <ConfirmRequest
                        title="حذف المستخدم"
                        id={e.id}
                        method="delete"
                        type="users"
                        operation="remove"
                        row={e}
                        dataType={stateData.viewTitle}
                        name={e.name}
                      />
                    </muiModules.TableCell>
                  ) : null}
                  {stateData.viewTitle === 'published' ? (
                    <muiModules.TableCell align="center">
                      <ConfirmRequest
                        title="حذف المنتج"
                        id={e.id}
                        method="delete"
                        type="products"
                        operation="remove"
                        row={e}
                        dataType={stateData.viewTitle}
                        name={e.name}
                      />
                    </muiModules.TableCell>
                  ) : null}
                  {stateData.viewTitle === 'pending' ? (
                    <muiModules.TableCell align="center">
                      <ConfirmRequest
                        title="قبول المنتج"
                        id={e.id}
                        method="put"
                        type="products"
                        operation="accept"
                        row={e}
                        dataType={stateData.viewTitle}
                        name={e.name}
                      />
                    </muiModules.TableCell>
                  ) : null}
                  {stateData.viewTitle === 'pending' ? (
                    <muiModules.TableCell align="center">
                      <ConfirmRequest
                        title="رفض المنتج"
                        id={e.id}
                        method="delete"
                        type="products"
                        operation="reject"
                        row={e}
                        dataType={stateData.viewTitle}
                        name={e.name}
                      />
                    </muiModules.TableCell>
                  ) : null}
                </muiModules.TableRow>
              ))}
          </muiModules.TableBody>
        </muiModules.Table>
      </muiModules.TableContainer>
    </muiModules.Paper>
  );
};
export default Table;
