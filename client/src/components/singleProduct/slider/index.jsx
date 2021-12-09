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
import styles from './style';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const SliderOneProduct = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = JSON.parse(data[0].images);

  return (
    <Box sx={{ width: { xs: '100%', md: '45%' } }}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          ...styles.mealSwiper,
        }}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.length !== 0 ? images.map((ele, i) => (
          <SwiperSlide key={ele[`image_${i + 1}`]}>
            <div
              style={styles.containerImgShow}
            >

              <img
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={ele[`image_${i + 1}`]}
                alt="img"
              />
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
        style={styles.mySwiper}
      >
        {images.length !== 0 ? images.map((ele, i) => (
          <SwiperSlide style={{ opacity: 1 }} key={ele[`image_${i + 1}`]}>
            <div
              style={styles.containerImg}
            >
              <img
                style={{
                  objectFit: 'cover',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  borderRadius: 0,
                  opacity: 0.5,
                }}
                src={ele[`image_${i + 1}`]}
                alt="img"
              />

            </div>
          </SwiperSlide>
        )) : 'nooooo'}
      </Swiper>
    </Box>
  );
};

SliderOneProduct.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SliderOneProduct;
