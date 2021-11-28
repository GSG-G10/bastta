/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
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
  const [test, setTest] = useState(false);
  const dispatch = useDispatch();

  const setMembersData = (data) => dispatch(actions.membersData(data));
  const setpublishedData = (data) => dispatch(actions.publishedData(data));
  const setpendingData = (data) => dispatch(actions.pendingData(data));
  const setTitle = (data) => dispatch(actions.viewTitle(data));
  const setViewData = (data) => dispatch(actions.viewData(data));

  const { data: stateData } = useSelector((state) => state);

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
      setMembersData(membersResponse);
      setpublishedData(publishedResponse);
      setpendingData(pendingResponse);
      if (stateData.viewData.length === 0) {
        setViewData(membersResponse);
      }
    })();
  }, [test]);

  return (
    <>
      <muiModules.Box
        title="الأعضاء"
        sx={sx.card}
        onClick={() => {
          setTitle('members');
          setViewData(stateData.members);
          setTest((c) => !c);
        }}
      >
        <h3>الأعضاء</h3>
        <h1>{stateData.members.length}</h1>
      </muiModules.Box>
      <muiModules.Box
        title="البضائع المعلنة"
        sx={sx.card}
        onClick={() => {
          setTitle('published');
          setViewData(stateData.published);
          setTest((c) => !c);
        }}
      >
        <h3>البضائع المعلنة</h3>
        <h1>{stateData.published.length}</h1>
      </muiModules.Box>
      <muiModules.Box
        title="البضائع المعلقة"
        sx={sx.card}
        onClick={() => {
          setTitle('pending');
          setViewData(stateData.pending);
          setTest((c) => !c);
        }}
      >
        <h3>البضائع المعلقة</h3>
        <h1>{stateData.pending.length}</h1>
      </muiModules.Box>
      <muiModules.Box
        title="البضائع المباعة"
        sx={sx.card}
        onClick={() => {
          setTitle('sold');
          setViewData(stateData.sold);
          setTest((c) => !c);
        }}
      >
        <h3>البضائع المباعة</h3>
        <h1>{stateData.sold.length}</h1>
      </muiModules.Box>
    </>
  );
};

export default Card;
