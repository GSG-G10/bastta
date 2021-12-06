/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import axios from 'axios';
import LoginForm from '../../AuthModal/LoginForm';
import RegisterForm from '../../AuthModal/RegisterForm';
import style from '../../AuthModal/style';

import * as M from '../../../mui-modules';

import './style.css';

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
    <M.Box width={{ width: '54%' }} className="container">

      {data.length !== 0 ? data.map((ele) => (
        <React.Fragment key={ele.id}>
          <article className="top">
            <h2 className="titles">
              {' '}
              {ele.name}
            </h2>
            <button
              type="submit"
              className="btn-like"
              onClick={(e) => {
                e.stopPropagation();
                check();
                handleFavItem(ele.id);
              }}
            >

              { id === ele.id || dataFavs.includes(ele.id) ? <M.FavoriteIcon sx={{ color: 'red' }} />
                : <M.FavoriteBorderIcon sx={{ color: '#A9AFB0' }} />}
            </button>
          </article>
          <span className="data">
            {ele.post_date.split('T')[0]}
            {' '}
          </span>
          <article className="more-info">
            <article className="first">
              <p className="city">
                المدينة:
                <span className="sub-city">{ele.city}</span>
              </p>
              <p className="type">
                النوع:
                <span className="sub-type">{ele.type}</span>
              </p>

            </article>
            <article className="second">
              <p className="status">
                الحالة :
                <span className="sub-status">مستخدم</span>
              </p>
              <p className="price">
                السعر:
                <span className="sub-price">
                  {ele.price}
                  {ele.currency}
                </span>
              </p>

            </article>
          </article>
          <h2 className="title-decription">تفاصيل</h2>
          <p className="decription">
            {ele.description}
          </p>
          <article className="btn">
            <button type="submit" className="btn-chat">
              <M.ChatIcon sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }} />
              ارسل رسالة
            </button>
            <button type="submit" className="btn-call">
              <M.LocalPhoneIcon sx={{ marginLeft: '12px' }} />
              <M.Link href={`tel:${ele.phone}`}>
                إتصل بالمعلن

              </M.Link>
            </button>
          </article>

        </React.Fragment>
      )) : 'no Data is fount'}
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

export default Detailes;

Detailes.propTypes = {
  data: PropTypes.array.isRequired,

};
