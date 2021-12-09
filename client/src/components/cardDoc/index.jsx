import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styles from './style';
import * as M from '../../mui-modules';

const CardDoc = () => (
  <M.Container
    maxWidth="xl"
    sx={{ marginBottom: '10vh' }}
  >
    <M.Box
      sx={styles.docSection}
    >
      <M.Typography
        variant="h3"
        sx={styles.title}
      >
        رؤيتنا
      </M.Typography>
      <M.Typography
        variant="body"
        sx={styles.description}
      >
        النهوض بحركة التجارة الالكترونية وتسهيلها في فلسطين وتوفير خدمات تواكب التقدم التكنولوجي.

      </M.Typography>
    </M.Box>
    <M.Box
      sx={{ ...styles.docSection, ...styles.border }}
    >
      <M.Typography
        variant="h3"
        sx={styles.title}
      >
        من نحن ؟
      </M.Typography>
      <M.Typography
        variant="body"
        sx={styles.description}
      >
        نقرب كل ما تحتاجه إليك! متجر يسهل عليك إيجاد والبحث من  بسطة وسهولة التواصل مع صاحب المنتج

      </M.Typography>
    </M.Box>
    <M.Box
      sx={styles.docSection}
    >
      <M.Typography
        variant="h3"
        sx={styles.title}
      >
        لماذا تختار بسطة ؟

      </M.Typography>
      <M.Box
        sx={styles.description}
      >
        <ol
          style={styles.ol}
        >
          <li>
            الاول في فلسطين
          </li>
          <li>
            تجميع والاهتمام بكل ما يحتاجه الانسان في مكان واحد
          </li>
          <li>
            سهولة  الوصول للمنتجات والبحث عنها
          </li>
          <li>
            سهولة التواصل مع اصحاب الإعلانات المعروضة
          </li>
        </ol>
      </M.Box>
    </M.Box>
    <M.Box
      sx={{ ...styles.docSection, ...styles.border }}
    >
      <M.Typography
        variant="h3"
        sx={styles.title}
        aria-hidden
      >
        تواصل معنا
      </M.Typography>
      <M.Box
        style={{ ...styles.description, ...styles.contact }}
      >
        <List>
          <ListItem sx={styles.text}>
            <ListItemIcon>
              <LocalPhoneIcon sx={{ color: '#1A6E9A' }} />
            </ListItemIcon>
            <ListItemText
              sx={styles.listText}
              primary="05xx-xxx-xxx"
            />
          </ListItem>
          <ListItem sx={styles.text}>
            <ListItemIcon>
              <EmailIcon sx={{ color: '#1A6E9A' }} />
            </ListItemIcon>
            <ListItemText
              sx={styles.listText}
              primary="info@basta.com"
            />
          </ListItem>
          <ListItem sx={styles.text}>
            <ListItemIcon>
              <LocationOnIcon
                sx={{ color: '#1A6E9A' }}
              />
            </ListItemIcon>
            <ListItemText
              sx={styles.listText}
              primary="فلسطين"
            />
          </ListItem>
        </List>
      </M.Box>
    </M.Box>
  </M.Container>
);

export default CardDoc;
