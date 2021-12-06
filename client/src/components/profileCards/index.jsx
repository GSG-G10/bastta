import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cards from './Cards';
import Favs from './Fav';

const ProfileCard = () => {
  const { authId } = useSelector((state) => state);
  const [state, setstate] = useState(true);
  const [data, setData] = useState([]);
  const [dataFav, setDataFav] = useState([]);

  const { UserID } = useParams();

  useEffect(() => {
    if (authId.id === Number(UserID)) {
      axios.get('/api/v1/products/favorites/')
        .then((res) => {
          setstate(true);
          const seen = new Set();

          const filteredArr = res.data.data.filter((el) => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
          });

          setDataFav(filteredArr);
        });
      axios.get(`/api/v1/products/profile/${UserID}`)
        .then((res) => {
          setData(res.data.data.approved);
        });
    } else {
      axios.get(`/api/v1/products/profile/${UserID}`)
        .then((res) => {
          setstate(false);
          setData(res.data.data.approved);
        });
    }
  }, [authId.id]);

  return (
    <div>
      {state === true
        ? (
          <>
            <h1> الإعلانات الخاصة بك :</h1>
            <Cards data={data} setData={setData} />
            <h1> مفضلتك:</h1>
            <Favs data={dataFav} setDataFav={setDataFav} state={state} />
          </>

        ) : (
          <>
            <h1> الإعلانات الخاصة به :</h1>
            <Cards data={data} state={state} />
          </>

        )}
    </div>
  );
};

export default ProfileCard;
