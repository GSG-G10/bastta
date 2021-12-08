import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as muiModules from '../../mui-modules';
import * as assets from '../../assets';
import AuthModal from '../AuthModal';
import SearchBox from './SearchBox';
import Dropdown from './Dropdown';
import NewAdsModal from '../NewAdsModal';
import style from './style';

const Navbar = () => {
  const {
    authId: { id },
  } = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <muiModules.Container maxWidth="xl">
      <muiModules.Box sx={style.body}>
        <a href="/">
          <img src={assets.logo} alt="logo" />
        </a>
        <SearchBox />
        {id ? (
          <muiModules.Box sx={style.userTools}>
            <muiModules.Box
              sx={style.chatBox}
              onClick={() => navigate('/')}
            >
              <muiModules.ChatIcon color="primary" fontSize="large" />
            </muiModules.Box>
            <muiModules.Box sx={style.dropMenu}>
              <NewAdsModal />
              <Dropdown userId={id} />
            </muiModules.Box>
          </muiModules.Box>
        ) : (
          <AuthModal />
        )}
      </muiModules.Box>
    </muiModules.Container>
  );
};

export default Navbar;
