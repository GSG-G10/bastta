/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { chaneDate } from '../../../store/actions';
import * as muiModules from '../../../mui-modules';

const sx = {
  card: {
    margin: '2rem',
    width: '200px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  },
};

const Card = () => {
  const [members, setMembers] = useState({});
  const [published, setPublished] = useState({});
  const [pending, setPending] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [sold, setSold] = useState(148);
  const dispatch = useDispatch();
  const changeData = (type, state) => dispatch(chaneDate([type, state]));

  useEffect(() => {
    (async () => {
      const testing = await Promise.all([
        axios.get('/api/v1/admin/users'),
        axios.get('/api/v1/admin/products?status=public'),
        axios.get('/api/v1/admin/products?status=pending'),
      ]);
      const { data: membersResponse } = testing[0];
      const { data: publishedResponse } = testing[1];
      const { data: pendingResponse } = testing[2];
      setMembers(membersResponse);
      setPublished(publishedResponse);
      setPending(pendingResponse);
      changeData('members', membersResponse);
    })();
  }, []);

  return (
    <>
      <muiModules.Box
        title="الأعضاء"
        sx={sx.card}
        onClick={() => changeData('members', members)}
      >
        <h3>الأعضاء</h3>
        <h1>{members.length}</h1>
      </muiModules.Box>
      <muiModules.Box
        title="البضائع المعلنة"
        sx={sx.card}
        onClick={() => changeData('published', published)}
      >
        <h3>البضائع المعلنة</h3>
        <h1>{published.length}</h1>
      </muiModules.Box>
      <muiModules.Box
        title="البضائع المعلقة"
        sx={sx.card}
        onClick={() => changeData('pending', pending)}
      >
        <h3>البضائع المعلقة</h3>
        <h1>{pending.length}</h1>
      </muiModules.Box>
      <muiModules.Box title="البضائع المباعة" value={sold} sx={sx.card}>
        <h3>البضائع المباعة</h3>
        <h1>{sold}</h1>
      </muiModules.Box>
    </>
  );
};

export default Card;
