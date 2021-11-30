import { Container } from '../../mui-modules';
import * as Components from '../../components';

const Home = () => (
  <>
    <Container sx={{ width: '1236px' }} maxWidth="xl">
      <Components.SliderHome />
    </Container>
    <Components.Footer />
  </>
);

export default Home;
