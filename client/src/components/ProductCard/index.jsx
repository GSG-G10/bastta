/* eslint-disable no-unused-vars */
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as muiModules from '../../mui-modules';
import * as style from './style';

const ProductCard = ({ productsData }) => {
  const navigate = useNavigate();
  const {
    id, images, name, type, city, price, currency,
  } = productsData;
  const image = JSON.parse(images)[0].image_1;
  return (
    <muiModules.Card variant="outlined">
      <muiModules.CardActionArea component="div" onClick={() => navigate(`products/${id}`)}>
        <muiModules.Box>
          <muiModules.CardMedia
            component="img"
            image={image}
            alt={name}
            sx={style.cardMedia}
          />
        </muiModules.Box>
        <muiModules.CardContent sx={style.cardContent}>

          <muiModules.Typography gutterBottom variant="h6" color="primary" fontSize={16} height={45}>
            {name}
          </muiModules.Typography>
          <muiModules.Typography
            variant="subtitle"
            color="primary"
            fontWeight="700"
            fontSize={14}
            sx={style.categoryLable}
          >
            {type}
          </muiModules.Typography>

          <muiModules.Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={5}
          >
            <muiModules.Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <muiModules.LocationOnOutlinedIcon color="primary" fontSize="small" />
              <muiModules.Typography variant="subtitle" color="primary">

                {city}
              </muiModules.Typography>
            </muiModules.Box>
            <muiModules.Typography variant="subtitle" color="primary" fontWeight="800">
              {currency === 'شيكل' ? '₪' : '$'}
              {price}
            </muiModules.Typography>
          </muiModules.Box>
        </muiModules.CardContent>
      </muiModules.CardActionArea>
    </muiModules.Card>
  );
};

export default ProductCard;

ProductCard.defaultProps = {
  productsData: {
    id: -1,
    name: '',
    type: '',
    city: '',
    price: -1,
    currency: '',
    images: '',
  },
};
ProductCard.propTypes = {
  productsData: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    type: propTypes.string,
    city: propTypes.string,
    price: propTypes.number,
    currency: propTypes.string,
    images: propTypes.string,
  }),
};
