/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import propTypes from 'prop-types';
import * as M from '../../mui-modules';

import './Favs.css';

const Favs = ({ data, setDataFav }) => {
  const { authId } = useSelector((state) => state);

  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    if (authId.id) {
      axios.delete(`/api/v1/products/favorites/${e}`)
        .then();
      const deletData = data.filter((item) => item.id !== e);
      setDataFav(deletData);
    }
  };
  return (
    <M.Box sx={{ width: '60%' }} className="container-classified">
      {data?.length > 0
        ? (data.map((ele) => (
          <M.Box onClick={() => navigate(`/products/${ele.id}`)} className="sub-container" key={ele.id}>
            <section className="rihgt">
              <img className="class-img" src={JSON.parse(ele.images)[0].image_1} alt={ele.type} />
            </section>
            <section className="left">
              <div className="name-classified">
                <span className="sub-name-classified">{ele.type}</span>
                <button
                  type="submit"
                  className="btn-like-classified"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveItem(ele.id);
                  }}
                >
                  <M.FavoriteIcon sx={{ color: 'red' }} />
                </button>
              </div>
              <p className="title-classified">
                {ele.name}
              </p>
              <article className="more-detalies">
                <article className="info">
                  <p className="price">
                    <span className="sub-price">
                      {ele.price}
                      {ele.currency}
                    </span>
                  </p>
                  <p className="icon-city">
                    <M.LocationOnIcon />
                    <span className="sub-city">{ele.city}</span>
                  </p>
                </article>
              </article>
              <article className="section-btn-classified">
                <button type="button" className="btn-append-product">
                  <M.ChatIcon sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }} />
                  ارسل رسالة
                </button>
                <button type="button" className="btn-call-classified">
                  <M.LocalPhoneIcon sx={{ marginLeft: '12px' }} />
                  <M.Link href={`tel:${ele.phone}`} onClick={(e) => e.stopPropagation()}>
                    إتصل بالمعلن
                  </M.Link>
                </button>
              </article>
            </section>
          </M.Box>
        )))
        : <h2> لا يوجد بيانات لعرضها يرجى المحاولة مرة اخرى </h2>}

    </M.Box>
  );
};

export default Favs;

Favs.propTypes = {
  data: propTypes.array.isRequired,
  setDataFav: propTypes.func.isRequired,
};
