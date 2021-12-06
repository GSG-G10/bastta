/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import * as M from '../../../mui-modules';

import './style.css';

const Detailes = ({ data }) => (
  <M.Box width={{ width: '50%' }} className="container">

    {data.length !== 0 ? data.map((ele) => (
      <React.Fragment key={ele.id}>
        <article className="top">
          <h2 className="titles">
            {' '}
            {ele.name}
          </h2>
          <button type="submit" className="btn-like">
            <M.FavoriteBorderIcon />
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
  </M.Box>
);

export default Detailes;

Detailes.propTypes = {
  data: PropTypes.array.isRequired,

};
