import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BgSlider from '../../assets/bg-slider.jpg';

import './style.css';

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-hidden
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      type="submit"
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex={0}
      aria-hidden

    />
  );
};
export default class SliderHome extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: 'linear',
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="conatiner-slider">
        <Slider {...settings}>
          <img src={BgSlider} alt="alt" />
          <img src="https://assets.femi9.com/media/catalog/category/inner-SP-A.jpg" alt="alt" />
          <img src="https://busta.ps/wp-content/uploads/2021/06/logo-busta.png" alt="alt" />
          <img src={BgSlider} alt="alt" />
          <img src="https://besthqwallpapers.com/Uploads/21-2-2020/122727/thumb2-online-shopping-monochrome-online-business-concepts-online-store-concepts-laptop.jpg" alt="alt" />
          <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?size=626&ext=jpg" alt="alt" />

        </Slider>
      </div>
    );
  }
}

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf.isRequired,
};
SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf.isRequired,
};
