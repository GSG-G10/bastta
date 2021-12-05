/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import PropTypes from 'prop-types';
import { Box } from '../../../mui-modules';

import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation';
import 'swiper/modules/free-mode/free-mode';
import 'swiper/modules/thumbs/thumbs';

import './style.css';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const SliderOneProduct = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = JSON.parse(data[0].images);
  const ArrayImg = [images[0].image_1, images[0].image_2, images[0].image_3, images[0].image_4];

  return (
    <Box sx={{ width: '45%' }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="meal-swiper"
      >
        {images.length !== 0 ? ArrayImg.map((ele) => (
          <SwiperSlide key={ele}>
            <div className="container-img-show">

              <img src={ele} alt="img" />
            </div>
          </SwiperSlide>
        )) : ' no data'}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mySwiper"
      >
        {images.length !== 0 ? ArrayImg.map((ele) => (
          <SwiperSlide key={ele}>
            <div className="container-img">
              <img src={ele} alt="img" />

            </div>
          </SwiperSlide>
        )) : 'nooooo'}
      </Swiper>
    </Box>
  );
};
export default SliderOneProduct;

SliderOneProduct.propTypes = {
  data: PropTypes.array.isRequired,

};
