import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';

import styles from '../style';

const ItemOne = () => (
  <div style={styles.container}>
    <div style={styles.logo}>
      <h1> بسطة</h1>
      <hr />
      <h1>Bastta</h1>
    </div>
    <div style={styles.social}>
      <FacebookIcon fontSize="large" />
      <TwitterIcon fontSize="large" />
      <InstagramIcon fontSize="large" />
      <TelegramIcon fontSize="large" />
    </div>
    <div style={styles.social}>
      <p> كل الحقوق محفوظة لدى بسطة </p>
      <CopyrightIcon fontSize="small" />
    </div>
  </div>
);

export default ItemOne;
