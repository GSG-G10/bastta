import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LOGO from '../../../assets/LOGO.png';
import * as M from '../../../mui-modules';
import styles from '../style';

const ItemOne = () => (
  <>
    <M.Box sx={styles.logo}>
      <img src={LOGO} alt="logo" style={styles.logoImg} />
    </M.Box>
    <M.Box sx={styles.social}>
      <FacebookIcon fontSize="large" />
      <TwitterIcon fontSize="large" />
      <InstagramIcon fontSize="large" />
      <TelegramIcon fontSize="large" />
    </M.Box>
    <M.Box sx={styles.social}>
      <M.Typography variant="body"> كل الحقوق محفوظة لدى بسطة </M.Typography>
      <CopyrightIcon fontSize="small" />
    </M.Box>
  </>
);

export default ItemOne;
