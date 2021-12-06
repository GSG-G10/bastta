import { useParams } from 'react-router-dom';

import * as M from '../../mui-modules';

import Filter from '../filter';
import PaginationClassified from '../pagination';

import styles from './style';

const CalssifiedCard = () => {
  const { search } = useParams();

  return (
    <M.Box width={{ width: '90%' }} style={styles.containerClassified}>
      <M.Box style={styles.containers}>
        <Filter />
        <PaginationClassified search={search} />
      </M.Box>
    </M.Box>
  );
};

export default CalssifiedCard;
