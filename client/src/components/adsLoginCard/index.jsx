import * as M from '../../mui-modules';
import * as S from './style';
import LOGO from '../../assets/LOGO.png';

const AdsLoginCard = () => (
  <M.Box sx={S.cardsContainer}>
    <M.Box sx={S.adsImg}>
      <img src={LOGO} alt="logo" style={{ width: '100%' }} />
    </M.Box>
    <M.Box sx={S.leftBox}>
      <M.Typography variant="h6" sx={S.adsInfo}>قم بنشر إعلانك الأن</M.Typography>
      <M.Button sx={S.adsBtn}>أعلن الأن</M.Button>
    </M.Box>
  </M.Box>
);

export default AdsLoginCard;
