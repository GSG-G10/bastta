import { useState, useEffect } from 'react';

import { Container } from '../../mui-modules';

import * as Components from '../../components';
import ProductsContainer from '../../components/ProductsContainer';

import sendRequests from './api';

const Home = () => {
  const [products, setProducts] = useState(null);

  const req = async () => {
    const responses = await sendRequests();
    setProducts(responses);
  };

  useEffect(() => {
    req();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Components.Navbar />
        <Components.SectionList />
        <Components.SliderHome />
        { products ? (
          <>
            <ProductsContainer
              sectionClass={products.recent}
              sectionName="المضافة حديثاً"
            />
            <ProductsContainer
              sectionClass={products.favourites}
              sectionName="الأكثر إعجاباً"
            />
            <Components.AdsLoginCard />
            {[products.الإلكترونيات, products.الأثاث, products.المركبات, products.الخدمات]
              .map((section) => (
                <ProductsContainer
                  key={section.id}
                  sectionClass={section}
                  sectionName={`الأكثر زيارة في قسم ${section[0].class}`}
                />
              ))}
          </>
        )
          : (
            <h1>
              جار التحميل يرجى الإنتظار ...
            </h1>
          )}
        <Components.AdsCard />
      </Container>
      <Components.Footer />
    </>
  );
};

export default Home;
