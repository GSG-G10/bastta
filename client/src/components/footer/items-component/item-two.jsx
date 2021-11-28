import sections from '../utils/sections';
import styles from '../style';

const Itemtwo = () => (
  <>
    <h1 style={styles.header}>الأقسام :</h1>
    <div style={styles.sections}>
      {sections[0].map((section) => (
        <a style={styles.par} key={section.id} href="/products">
          {section.name}
        </a>
      ))}
    </div>
  </>
);

export default Itemtwo;
