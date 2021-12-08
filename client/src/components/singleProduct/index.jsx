import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SliderOneProduct from './slider';
import Detailes from './detailes';
import { Container } from '../../mui-modules';

const SingleProduct = () => {
  const [data, dataSet] = useState([]);
  const [message, setMessage] = useState();
  const { slug } = useParams();
  useEffect(() => {
    const getData = async () => {
      const resultes = await axios.get(`/api/v1/products/${slug}`);
      const res = resultes.data.data;
      if (typeof (res) === 'undefined') {
        setMessage(resultes.data.message);
      } else {
        dataSet([resultes.data.data]);
      }
    };
    getData();
  }, []);

  return (
    <Container sx={{
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      border: '1px solid rgba(169, 175, 176, 0.5)',
      borderRadius: '4px',
      marginBottom: '3rem',
      padding: '10px',
    }}
    >
      {
  data.length !== 0
    ? (
      <>
        <Detailes data={data} />
        <SliderOneProduct data={data} />
      </>
    )
    : <h1>{message}</h1>
}
    </Container>
  );
};

export default SingleProduct;
