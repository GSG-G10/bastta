import styles from './styles';

const Error500 = () => (
  <div style={styles.serverContainer}>
    <h1> خطأ 500 </h1>
    <h3>نأسف لقد حدث خطأ ما خلال معالجة بعض البيانات</h3>
    <p>
      يمكنك الذهاب الى الصفحة الرئيسية
      {' '}
      <a href="/">من هنا </a>
    </p>
  </div>
);

export default Error500;
