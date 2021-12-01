import * as muiModules from '../../mui-modules';
import * as Components from '../../components';

const Home = () => (
  <muiModules.Container maxWidth="xl">
    <Components.Navbar />
    <Components.AuthModal />
    <Components.SliderHome />
    <Components.Footer />
  </muiModules.Container>
);

export default Home;
