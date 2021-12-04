import { useParams } from 'react-router-dom';
import * as M from '../../mui-modules';

import PaginationClassified from '../paginaion';
import './style.css';

const CalssifiedCard = () => {
  const { search } = useParams();
  return (
    <M.Box width={{ width: '60%' }} className="container-classified">
      <PaginationClassified search={search} />
    </M.Box>
  );
};

export default CalssifiedCard;
