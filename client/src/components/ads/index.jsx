import * as M from '../../mui-modules';
import * as S from './style';
import LOGO from '../../assets/LOGO2.png';

const AdsCard = () => (
  <M.Box sx={S.cardsContainer}>
    <p style={S.Title}> الموقع الفلسطيني الأول المتخصص ببيع البضائع المستعملة</p>
    <img src={LOGO} alt="logo" style={S.img} />
  </M.Box>
);

export default AdsCard;
