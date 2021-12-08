import sections from '../utils/sections';
import styles from '../style';
import * as M from '../../../mui-modules';

const Itemtwo = () => (
  <>
    <M.Typography variant="h5" sx={styles.header}>الأقسام :</M.Typography>
    <M.Box sx={styles.sections}>
      {sections[0].map((section) => (
        <M.Link sx={styles.par} key={section.id} href={`/product/${section.name}`}>
          {section.name}
        </M.Link>
      ))}
    </M.Box>
  </>
);

export default Itemtwo;
