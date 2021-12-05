import { useParams } from 'react-router-dom';
import * as M from '../../mui-modules';
import Filter from '../filter';
import PaginationClassified from '../paginaion';
import './style.css';

const CalssifiedCard = () => {
  const { search } = useParams();
  return (
    <M.Box width={{ width: '90%' }} className="container-classified">
      <M.Box className="containers">

        <Filter />
        <PaginationClassified search={search} />

      </M.Box>
    </M.Box>
  );
};

export default CalssifiedCard;
