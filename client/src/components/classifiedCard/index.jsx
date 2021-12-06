import { useParams } from 'react-router-dom';

import * as M from '../../mui-modules';
import PaginationClassified from '../pagination';

import styles from './style';

const CalssifiedCard = () => {
  const { search } = useParams();
  return (

    <M.Box width={{ width: '90%' }} style={styles.containerClassified}>
      <PaginationClassified search={search} />
    </M.Box>

  );
};

export default CalssifiedCard;
