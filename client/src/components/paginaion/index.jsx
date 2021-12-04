import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import propTypes from 'prop-types';

import * as M from '../../mui-modules';
import './style.css';

const PaginationClassified = ({ search }) => {
  const [data, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const items = 10;
  useEffect(() => {
    axios.get(`/api/v1/products/public/${page}/${search}`)
      .then((response) => {
        setCount(response.data.count);
        setCategories(response.data.data);
      });
  }, [items, page, search]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <M.Box width={{ width: '100%' }} className="container-classified">
        {data.length !== 0 ? data.map((ele) => (
          <M.Box onClick={() => navigate(`/products/${ele.id}`)} className="sub-container" key={ele.id}>
            <section className="rihgt">

              <img className="class-img" src={JSON.parse(ele.images)[0].image_1} alt={ele.type} />
            </section>
            <section className="left">
              <div className="name-classified">
                <span className="sub-name-classified">{ele.type}</span>
                <button type="submit" className="btn-like-classified">
                  <M.FavoriteBorderIcon sx={{ color: '#A9AFB0' }} />
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
                    {' '}
                    <span className="sub-city">{ele.city}</span>
                  </p>

                </article>
              </article>

              <article className="section-btn-classified">
                <button type="button" className="btn-chat-classified">
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
        )) : <h3>لا يوجد بيانات لعرضها يرجى المحاولة مرة اخرى !</h3>}
      </M.Box>

      <Pagination
        count={Math.ceil(count / items)}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={page}
        onChange={handlePageChange}
        sx={{ display: 'flex', justifyContent: 'center', py: '3rem' }}
      />
    </>
  );
};

export default PaginationClassified;

PaginationClassified.propTypes = {

  search: propTypes.string.isRequired,
};
