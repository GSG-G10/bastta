import sections from '../utils/sections';
import styles from '../style';
import * as M from '../../../mui-modules';

const Itemthree = () => (
  <>
    <M.Typography variant="h5" sx={styles.header}>ما هو بسطة ؟  </M.Typography>
    <M.Box sx={styles.sections}>
      {sections[1].map((section) => (
        <M.Link sx={styles.par} key={section.id} href="/about-us">
          {section.name}
        </M.Link>
      ))}
    </M.Box>
  </>
);

export default Itemthree;
