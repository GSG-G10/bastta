import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css';

const CardDoc = () => (
  <div className="container">
    <section className="doc-section">
      <h3 className="title">
        رؤيتنا
      </h3>
      <p className="description">
        النهوض بحركة التجارة الالكترونية وتسهيلها في فلسطين وتوفير خدمات تواكب التقدم التكنولوجي .

      </p>
    </section>
    <section className="border doc-section">
      <h3 className="title">
        من نحن ؟
      </h3>
      <p className="description">
        نقرب كل ما تحتاجه إليك! متجر يسهل عليك إيجاد والبحث من  بسطة وسهولة التواصل مع صاحب المنتج

      </p>
    </section>
    <section className="doc-section">
      <h3 className="title">
        لماذا تختار بسطة ؟

      </h3>
      <p className="description">
        <ol>
          <li>
            الاول في فلسطين
          </li>
          <li>
            تجميع والاهتمام بكل ما يحتاجه الانسان في مكان واحد
          </li>
          <li>
            سهولة  الوصول للمنتجات والبحث عنها
          </li>
          <li>سهولة التواصل مع اصحاب الإعلانات المعروضة</li>
        </ol>
      </p>
    </section>
    <section className="border doc-section ">
      <h3 className="title" aria-hidden>
        تواصل معنا
      </h3>
      <article className="description contact ">
        <p className="text">
          <LocalPhoneIcon sx={{ color: '#1A6E9A' }} />
          <h6>
            0599-777-777
          </h6>

        </p>
        <p className="text">
          <EmailIcon sx={{ color: '#1A6E9A' }} />
          <h6>
            info@basta.com

          </h6>

        </p>
        <p className="text">
          <LocationOnIcon sx={{ color: '#1A6E9A' }} />
          <h6>
            فلسطين

          </h6>

        </p>

      </article>
    </section>

  </div>
);

export default CardDoc;
