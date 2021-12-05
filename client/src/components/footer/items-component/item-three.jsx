import sections from '../utils/sections';
import styles from '../style';

const Itemthree = () => (
  <>
    <h1 style={styles.header}>ما هو بسطة ؟  </h1>
    <div style={styles.sections}>
      {sections[1].map((section) => (
        <a style={styles.par} key={section.id} href="/about-us">
          {section.name}
        </a>
      ))}
    </div>
  </>
);

export default Itemthree;
