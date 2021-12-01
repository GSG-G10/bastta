import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as M from '../../mui-modules';

import './style.css';

const CalssifiedCard = () => {
  const [data, dataSet] = useState([]);
  const [message, setMessage] = useState();
  const { search } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const resultes = await axios.get(`/api/v1/products/search?q=${search}`);
      const res = resultes.data;
      if (!res) {
        setMessage(resultes.data.message);
      } else {
        dataSet(res);
      }
    };
    getData();
  }, []);

  return (
    <M.Box width={{ width: '60%' }} className="container-classified">
      {message}
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
  );
};

export default CalssifiedCard;
