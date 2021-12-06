/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import { useNavigate } from 'react-router-dom';

import propTypes from 'prop-types';
import axios from 'axios';
import * as M from '../../mui-modules';

import './style.css';

const Cards = ({ data, setData, state }) => {
  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    axios.delete(`/api/v1/products/${e}`)
      .then();
    const deletData = data.filter((item) => item.id !== e);
    setData(deletData);
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
              {
                state ? (
                  <article className="section-btn-classified">
                    <button
                      type="button"
                      className="btn-delete-product"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(ele.id);
                      }}
                    >
                      <M.DeleteIcon sx={{ backgroundColor: '#D93128', marginLeft: '12px' }} />
                      حدف المنتج

                    </button>
                  </article>
                ) : ''
              }

            </section>
          </M.Box>
        )))
        : <h2> لا يوجد بيانات لعرضها يرجى المحاولة مرة اخرى </h2>}

    </M.Box>
  );
};

export default Cards;

Cards.propTypes = {
  data: propTypes.array.isRequired,
  setData: propTypes.func.isRequired,
  state: propTypes.bool.isRequired,
};
