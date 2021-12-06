/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import propTypes from 'prop-types';
import * as M from '../../mui-modules';

import styles from './style';

const PaginationClassified = ({ search }) => {
  const [data, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/v1/products/public/${page}/${search}`)
      .then((response) => {
        setCount(response.data.count);
        setCategories(response.data.data);
        setIsLoaded(true);
      });
  }, [page, search]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <M.Box
      sx={{ width: '60%' }}
      style={styles.containerClassified}
    >
      {isLoaded
        ? data?.length > 0
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
                    style={styles.subnameClassified}
                  >
                    {ele.type}
                  </span>
                  <button
                    type="submit"
                    style={styles.btnLikeClassified}
                  >
                    <M.FavoriteBorderIcon
                      sx={{ color: '#A9AFB0' }}
                    />
                  </button>
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
                        {' '}
                        {ele.currency}
                      </span>
                    </p>
                    <p
                      style={styles.iconCity}
                    >
                      <M.LocationOnIcon />
                      <span
                        style={styles.subCity}
                      >
                        {ele.city}
                      </span>
                    </p>
                  </article>
                </article>
                <article
                  style={styles.sectionBtnClassified}
                >
                  <button
                    type="button"
                    style={{ ...styles.sectionClassifiedButton, ...styles.btnChatClassified }}
                  >
                    <M.ChatIcon
                      sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }}
                    />
                    ارسل رسالة
                  </button>
                  <button
                    type="button"
                    style={{ ...styles.sectionClassifiedButton, ...styles.btnCallClassified }}
                  >
                    <M.LocalPhoneIcon
                      sx={{ marginLeft: '12px' }}
                    />
                    <M.Link
                      href={`tel:${ele.phone}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      إتصل بالمعلن
                    </M.Link>
                  </button>
                </article>
              </section>
            </M.Box>
          )))
          : <h2> لا يوجد بيانات لعرضها يرجى المحاولة مرة اخرى </h2>
        : <h1>يرجى الانتظار ....</h1>}
      <Pagination
        count={Math.ceil(count / 10)}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={page}
        onChange={handlePageChange}
        sx={
          {
            display: 'flex',
            justifyContent: 'center',
            py: '3rem',
          }
        }
      />
    </M.Box>
  );
};

PaginationClassified.propTypes = {
  search: propTypes.string.isRequired,
};

export default PaginationClassified;
