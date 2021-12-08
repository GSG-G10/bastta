/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-nested-ternary */
import { useNavigate } from 'react-router-dom';

import propTypes from 'prop-types';
import axios from 'axios';
import * as M from '../../mui-modules';

import styles from './style';

const Cards = ({ data, setData, state }) => {
  const navigate = useNavigate();

  const handleRemoveItem = (e) => {
    axios.delete(`/api/v1/products/${e}`)
      .then();
    const deletData = data.filter((item) => item.id !== e);
    setData(deletData);
  };

  return (
    <M.Box
      sx={{ width: '60%' }}
      style={styles.containerClassified}
    >
      {data?.length > 0
        ? (data.map((ele) => (
          <M.Box
            onClick={() => navigate(`/products/${ele.id}`)}
            style={styles.subContainer}
            key={ele.id}
          >
            <section
              style={styles.right}
            >
              <img
                style={styles.classImg}
                src={JSON.parse(ele.images)[0].image_1}
                alt={ele.type}
              />
            </section>
            <section
              style={styles.left}
            >
              <div
                style={styles.nameClassified}
              >
                <span
                  style={styles.subNameClassified}
                >
                  {ele.type}
                </span>

              </div>
              <p
                style={styles.titleClassified}
              >
                {ele.name}
              </p>
              <article
                style={styles.moreDetails}
              >
                <article
                  style={styles.info}
                >
                  <p
                    style={styles.price}
                  >
                    <span
                      style={styles.subPrice}
                    >
                      {ele.price}
                      {ele.currency}
                    </span>
                  </p>
                  <p
                    className="icon-city"
                  >
                    <M.LocationOnIcon />
                    <span style={styles.subCity}>
                      {ele.city}
                    </span>
                  </p>
                </article>
              </article>
              {
                state ? (
                  <article
                    style={styles.sectionBtnClassified}
                  >
                    <button
                      type="button"
                      style={{ ...styles.sectionBtnClassifiedButton, ...styles.btnDeleteProduct }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveItem(ele.id);
                      }}
                    >
                      <M.DeleteIcon
                        sx={{
                          backgroundColor: '#D93128',
                          marginLeft: '12px',
                        }}
                      />
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
