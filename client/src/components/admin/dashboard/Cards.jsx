import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';

import * as actions from '../../../store/actions';

import * as MuiModules from '../../../mui-modules';
import * as style from './style';

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
      <MuiModules.Box
        title="الأعضاء"
        sx={style.card}
        onClick={() => {
          setTitle('members');
          setViewData(stateData.members);
          setTest((c) => !c);
        }}
      >
        <h3>الأعضاء</h3>
        <h1>{stateData.members.length}</h1>
      </MuiModules.Box>
      <MuiModules.Box
        title="البضائع المعلنة"
        sx={style.card}
        onClick={() => {
          setTitle('published');
          setViewData(stateData.published);
          setTest((c) => !c);
        }}
      >
        <h3>البضائع المعلنة</h3>
        <h1>{stateData.published.length}</h1>
      </MuiModules.Box>
      <MuiModules.Box
        title="البضائع المعلقة"
        sx={style.card}
        onClick={() => {
          setTitle('pending');
          setViewData(stateData.pending);
          setTest((c) => !c);
        }}
      >
        <h3>البضائع المعلقة</h3>
        <h1>{stateData.pending.length}</h1>
      </MuiModules.Box>
    </>
  );
};

export default Card;
