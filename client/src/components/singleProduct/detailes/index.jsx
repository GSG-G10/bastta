import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import axios from 'axios';

import LoginForm from '../../AuthModal/LoginForm';
import RegisterForm from '../../AuthModal/RegisterForm';
import style from '../../AuthModal/style';

import * as M from '../../../mui-modules';

import styles from './style';

const Detailes = ({ data }) => {
  const [id, setId] = useState(0);
  const [dataFavs, setDataFavs] = useState([]);
  const [auth, setAuth] = useState(true);
  const [open, setOpen] = useState(true);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [manageModal, setManageModal] = useState(true);

  const { authId } = useSelector((state) => state);

  const check = () => {
    if (authId.id) {
      setAuth(true);
    } else {
      setAuth(false);
      handleOpen();
    }
  };
  const handleFavItem = (e) => {
    if (authId.id) {
      axios.post('/api/v1/products/favorites/', { productId: e })
        .then((res) => {
          setDataFavs((prev) => [...prev, e]);
          setId(res.data.id);
        });
    }
  };

  return (
    <M.Box
      width={{ width: '50%' }}
      sx={{ margin: 'auto' }}
    >

      {data.length !== 0 ? data.map((ele) => (
        <React.Fragment key={ele.id}>
          <article
            style={styles.top}
          >
            <h2
              style={styles.titles}
            >
              {ele.name}
            </h2>
            <button
              type="submit"
              style={styles.btnLike}
              onClick={(e) => {
                e.stopPropagation();
                check();
                handleFavItem(ele.id);
              }}
            >

              { id === ele.id || dataFavs.includes(ele.id)
                ? <M.FavoriteIcon sx={{ color: 'red' }} />
                : (
                  <M.FavoriteBorderIcon sx={{ color: '#A9AFB0' }} />
                )}
            </button>
          </article>
          <span
            style={styles.date}
          >
            {ele.post_date.split('T')[0]}
          </span>
          <article
            style={styles.moreInfo}
          >
            <article
              style={styles.first}
            >
              <p style={styles.city}>
                المدينة:
                <span style={styles.subCity}>
                  {ele.city}
                </span>
              </p>
              <p style={styles.type}>
                النوع:
                <span style={styles.subType}>
                  {ele.type}
                </span>
              </p>

            </article>
            <article
              style={styles.second}
            >
              <p
                style={styles.status}
              >
                الحالة :
                <span style={styles.subStatus}>مستخدم</span>
              </p>
              <p
                style={styles.price}
              >
                السعر:
                <span style={styles.subPrice}>
                  {ele.price}
                  {ele.currency}
                </span>
              </p>
            </article>
          </article>
          <h2
            style={styles.titleDecription}
          >
            تفاصيل الإعلان :
          </h2>
          <p
            style={styles.decription}
          >
            {ele.description}
          </p>
          <article style={styles.btn}>
            <button
              type="submit"
              style={{ ...styles.btnbButtons, ...styles.btnChat }}
            >
              <M.ChatIcon
                sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }}
              />
              ارسل رسالة
            </button>
            <button
              type="submit"
              style={{ ...styles.btnbButtons, ...styles.btnCall }}
            >
              <M.LocalPhoneIcon
                sx={{ marginLeft: '12px' }}
              />
              <M.Link
                href={`tel:${ele.phone}`}
              >
                إتصل بالمعلن
              </M.Link>
            </button>
          </article>

        </React.Fragment>
      ))
        : 'no Data is fount'}
      {auth ? (
        '') : (
          <M.Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <M.Box sx={style.modal}>
              {manageModal ? (
                <LoginForm setManageModal={setManageModal} />
              ) : (
                <RegisterForm setManageModal={setManageModal} />
              )}
            </M.Box>
          </M.Modal>
      )}
    </M.Box>
  );
};

Detailes.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Detailes;
