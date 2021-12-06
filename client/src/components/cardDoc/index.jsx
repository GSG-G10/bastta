import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from './style';

const CardDoc = () => (
  <div
    style={{ margin: 'auto', marginBottom: '10vh' }}
  >
    <section
      style={styles.docSection}
    >
      <h3
        style={styles.title}
      >
        رؤيتنا
      </h3>
      <p
        style={styles.description}
      >
        النهوض بحركة التجارة الالكترونية وتسهيلها في فلسطين وتوفير خدمات تواكب التقدم التكنولوجي .

      </p>
    </section>
    <section
      style={{ ...styles.docSection, ...styles.border }}
    >
      <h3
        style={styles.title}
      >
        من نحن ؟
      </h3>
      <p
        style={styles.description}
      >
        نقرب كل ما تحتاجه إليك! متجر يسهل عليك إيجاد والبحث من  بسطة وسهولة التواصل مع صاحب المنتج

      </p>
    </section>
    <section
      style={styles.docSection}
    >
      <h3
        style={styles.title}
      >
        لماذا تختار بسطة ؟

      </h3>
      <p
        style={styles.description}
      >
        <ol
          style={styles.ol}
        >
          <li
            style={styles.li}
          >
            الاول في فلسطين
          </li>
          <li
            style={styles.li}
          >
            تجميع والاهتمام بكل ما يحتاجه الانسان في مكان واحد
          </li>
          <li
            style={styles.li}
          >
            سهولة  الوصول للمنتجات والبحث عنها
          </li>
          <li
            style={styles.li}
          >
            سهولة التواصل مع اصحاب الإعلانات المعروضة
          </li>
        </ol>
      </p>
    </section>
    <section
      style={{ ...styles.docSection, ...styles.border }}
    >
      <h3
        style={styles.title}
        aria-hidden
      >
        تواصل معنا
      </h3>
      <article
        style={{ ...styles.description, ...styles.contact }}
      >
        <p
          style={styles.text}
        >
          <LocalPhoneIcon sx={{ color: '#1A6E9A' }} />
          <h6
            style={styles.h6}
          >
            05xx-xxx-xxx
          </h6>
        </p>
        <p
          style={styles.text}
        >
          <EmailIcon sx={{ color: '#1A6E9A' }} />
          <h6
            style={styles.h6}
          >
            info@basta.com
          </h6>
        </p>
        <p
          style={styles.text}
        >
          <LocationOnIcon
            sx={{ color: '#1A6E9A' }}
          />
          <h6
            style={styles.h6}
          >
            فلسطين
          </h6>
        </p>
      </article>
    </section>
  </div>
);

export default CardDoc;
