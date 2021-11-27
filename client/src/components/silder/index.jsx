import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BgSlider from '../../assets/bg-slider.jpg';
import Code from '../../assets/code.jpg';
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

          <img src={Code} alt="alt" />

          <img src={BgSlider} alt="alt" />

          <img src={Code} alt="alt" />

          <img src={BgSlider} alt="alt" />

          <img src={Code} alt="alt" />

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
