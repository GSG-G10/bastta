/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import { Box } from '../../../mui-modules';

import './style.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  textAlign: 'center',
  p: 4,
};

const Detailes = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box width={{ width: '54%' }} className="container">

      {data.length !== 0 ? data.map((ele) => (
        <React.Fragment key={ele.id}>
          <article className="top">
            <h2 className="titles">
              {' '}
              {ele.name}
            </h2>
            <button type="submit" className="btn-like">
              <FavoriteBorderIcon />
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
              <ChatIcon sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }} />
              ارسل رسالة
            </button>
            <button type="submit" className="btn-call" onClick={handleOpen}>
              <LocalPhoneIcon sx={{ marginLeft: '12px' }} />
              إتصل بالمعلن
            </button>
          </article>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description" sx={{ mt: 2, border: '1px solid balck' }}>
                {ele.phone}
              </Typography>
            </Box>
          </Modal>
        </React.Fragment>
      )) : 'no Data is fount'}
    </Box>
  );
};

export default Detailes;

Detailes.propTypes = {
  data: PropTypes.array.isRequired,

};
