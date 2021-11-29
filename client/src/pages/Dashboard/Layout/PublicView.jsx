import { Cards } from '../../../components/admin';

const sx = {
  body: {
    width: '100%',
    display: 'flex',
  },
  cardsBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
};
const PublicView = () => (
  <div style={sx.body}>
    <div style={sx.cardsBox}>
      <Cards />
    </div>
  </div>
);
export default PublicView;
