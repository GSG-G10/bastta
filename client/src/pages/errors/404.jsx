import styles from './styles';

const Error404 = () => (
  <div style={styles.clientContainer}>
    <h1> عفواً ... خطأ 404   </h1>
    <h2>عذرا، ولكن الصفحة التي تبحث عنها غير موجودة </h2>
    <p>
      يمكنك الذهاب الى
      {' '}
      <a href="/"> الصفحة الرئيسية  </a>
    </p>
  </div>
);
export default Error404;
