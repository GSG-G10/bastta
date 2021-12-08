import { Container, Box } from '../../mui-modules';
import { ItemOne, ItemTwo, ItemThree } from './items-component';
import styles from './style';
import * as M from '../../mui-modules';

const Footer = () => (
  <Box sx={{ backgroundColor: '#1a6e9a' }}>
    <Container maxWidth="lg">
      <Box
        sx={styles.itemsBox}
      >
        <Box sx={styles.item}>
          <ItemOne />
        </Box>
        <M.Divider orientation="vertical" flexItem variant="middle" sx={{ borderColor: 'white' }} />
        <Box sx={styles.item}>
          <ItemTwo />
        </Box>
        <M.Divider orientation="vertical" flexItem variant="middle" sx={{ borderColor: 'white' }} />
        <Box sx={styles.item}>
          <ItemThree />
        </Box>
      </Box>
    </Container>
  </Box>
);
export default Footer;
