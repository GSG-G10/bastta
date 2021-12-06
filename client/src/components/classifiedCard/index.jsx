import { useParams } from 'react-router-dom';

import * as M from '../../mui-modules';
import PaginationClassified from '../paginaion';

const CalssifiedCard = () => {
  const { search } = useParams();
  return (

    <M.Box width={{ width: '90%' }} className="container-classified">
      <PaginationClassified search={search} />
    </M.Box>

  );
};

export default CalssifiedCard;
