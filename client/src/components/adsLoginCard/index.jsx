import * as M from '../../mui-modules';
import * as S from './style';
import LOGO from '../../assets/LOGO.png';

const AdsLoginCard = () => (
  <M.Box sx={S.cardsContainer}>
    <img src={LOGO} alt="logo" />
    <div>
      <p style={S.adsInfo}>قم بنشر إعلانك الأن</p>
      <button style={S.adsBtn} type="button">أعلن الأن</button>
    </div>
  </M.Box>
);

export default AdsLoginCard;
