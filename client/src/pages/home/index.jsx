/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from '../../mui-modules';
import * as Components from '../../components';
import ProductsContainer from '../../components/ProductsContainer';

const Home = () => {
  const [recentProducts, setResentProducts] = useState([]);
  const [mostFavourite, setMostFavourite] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [athathProducts, setAthathProducts] = useState([]);
  const [markabatProducts, setMarkabatProducts] = useState([]);
  const [khdmatProducts, setKhdmatProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/products/public?section=recent&limit=4').then((res) => setResentProducts(res.data.data));
    axios.get('/api/v1/products/public?section=favourites&limit=4').then((res) => setMostFavourite(res.data.data));
    axios.get('/api/v1/products/public?section=الإلكترونيات&limit=4').then((res) => setElectronicsProducts(res.data.data));
    axios.get('/api/v1/products/public?section=الأثاث&limit=4').then((res) => setAthathProducts(res.data.data));
    axios.get('/api/v1/products/public?section=المركبات&limit=4').then((res) => setMarkabatProducts(res.data.data));
    axios.get('/api/v1/products/public?section=الخدمات&limit=4').then((res) => setKhdmatProducts(res.data.data));
  }, []);

  return (
    <>
      <Container sx={{ width: '1236px' }} maxWidth="xl">
        <Components.SliderHome />
        <ProductsContainer sectionClass={recentProducts} sectionName="المضافة حديثاً" />
        <ProductsContainer sectionClass={mostFavourite} sectionName="الأكثر إعجاباً" />
        <Components.AdsLoginCard />
        <ProductsContainer sectionClass={electronicsProducts} sectionName="الأكثر زيارة في قسم الإلكترونيات" />
        <ProductsContainer sectionClass={athathProducts} sectionName="الأكثر زيارة في قسم الأثاث" />
        <ProductsContainer sectionClass={markabatProducts} sectionName="الأكثر زيارة في قسم المركبات" />
        <ProductsContainer sectionClass={khdmatProducts} sectionName="الأكثر زيارة في قسم الخدمات" />
        <Components.AdsCard />
      </Container>
      <Components.Footer />
    </>
  );
};

export default Home;
