import propTypes from 'prop-types';

import ProductCard from '../ProductCard';
import * as muiModules from '../../mui-modules';
import * as style from './style';

const ProductsContainer = ({ sectionClass, sectionName }) => (
  <muiModules.Box sx={style.cardsContainer}>
    <muiModules.Typography
      variant="h5"
      color="primary"
      sx={style.containerTitle}
    >
      {sectionName}
    </muiModules.Typography>
    <muiModules.Box sx={style.cardsBoxes}>
      {sectionClass.map((product) => (

        <ProductCard key={product.id} productsData={product} />
      ))}
    </muiModules.Box>
  </muiModules.Box>
);

export default ProductsContainer;

ProductsContainer.defaultProps = {
  sectionClass: [],
  sectionName: '',
};
ProductsContainer.propTypes = {
  sectionClass: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.shape({
        name: propTypes.string,
        type: propTypes.string,
        city: propTypes.string,
        price: propTypes.number,
        images: propTypes.string,

      }),
    ]),
  ),
  sectionName: propTypes.string,
};
