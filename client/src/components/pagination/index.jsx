/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import propTypes from 'prop-types';
import * as M from '../../mui-modules';
import LoginForm from '../AuthModal/LoginForm';
import RegisterForm from '../AuthModal/RegisterForm';
import style from '../AuthModal/style';
import Filter from '../filter';
import styles from './style';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const PaginationClassified = ({ search }) => {
  const theme = useTheme();
  const [data, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [auth, setAuth] = useState(true);
  const [id, setId] = useState(0);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [manageModal, setManageModal] = useState(true);
  const [open, setOpen] = useState(true);
  const [dataFavs, setDataFavs] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = M.useMediaQuery(() => theme.breakpoints.up('sm'));
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { authId } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/v1/products/public/${page}/${search}`)
      .then((response) => {
        setCount(response.data.count);
        setCategories(response.data.data);

        setIsLoaded(true);
      });
  }, [page, search]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const check = () => {
    if (authId.id) {
      setAuth(true);
    } else {
      setAuth(false);
      handleOpen();
    }
  };

  const handleFavItem = (e) => {
    if (authId.id) {
      axios.post('/api/v1/products/favorites/', { productId: e })
        .then((res) => {
          setDataFavs((prev) => [...prev, e]);
          setId(res.data.id);
        });
    }
  };

  return (
    <M.Container maxWidth="xl">
      <M.Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {isMobile ? (
          <Filter setData={setCategories} setIsLoaded={setIsLoaded} setCount={setCount} />
        ) : (
          <>
            <M.IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              sx={{
                ...(drawerOpen && { display: 'none' }), color: '#000', borderRadius: '0', backgroundColor: '#ddd',
              }}
            >
              <M.FilterListIcon />
            </M.IconButton>

            <M.Drawer
              anchor="top"
              open={drawerOpen}
            >
              <DrawerHeader>
                <M.IconButton onClick={handleDrawerClose}>
                  <M.ClearIcon />
                </M.IconButton>
              </DrawerHeader>
              <M.Divider />
              <M.Box display="flex" flexDirection="column" p={2.8}>
                <Filter
                  setData={setCategories}
                  setIsLoaded={setIsLoaded}
                  setCount={setCount}
                  handleDrawerClose={handleDrawerClose}
                />
              </M.Box>
            </M.Drawer>
          </>
        )}

        <M.Box
          sx={styles.containerClassified}
        >
          {isLoaded
            ? data?.length > 0
              ? (data.map((ele) => (
                <M.Box
                  onClick={() => navigate(`/products/${ele.id}`)}
                  sx={styles.subContainer}
                  key={ele.id}
                >
                  <M.Box
                    sx={styles.right}
                  >
                    <img
                      style={styles.classImg}
                      src={JSON.parse(ele.images)[0].image_1}
                      alt={ele.type}
                    />
                  </M.Box>
                  <M.Box
                    sx={styles.left}
                  >
                    <div
                      style={styles.nameClassified}
                    >
                      <span
                        style={styles.subnameClassified}
                      >
                        {ele.type}
                      </span>
                      <button
                        type="submit"
                        style={styles.btnLikeClassified}
                        onClick={(e) => {
                          e.stopPropagation();
                          check();
                          handleFavItem(ele.id);
                        }}
                      >
                        { id === ele.id || dataFavs.includes(ele.id) ? <M.FavoriteIcon sx={{ color: 'red' }} />
                          : <M.FavoriteBorderIcon sx={{ color: '#A9AFB0' }} />}
                      </button>
                    </div>
                    <p
                      style={styles.titleClassified}
                    >
                      {ele.name}
                    </p>
                    <article
                      style={styles.moreDetails}
                    >
                      <article
                        style={styles.info}
                      >
                        <p
                          style={styles.price}
                        >
                          <span
                            style={styles.subPrice}
                          >
                            {ele.price}
                            {' '}
                            {ele.currency}
                          </span>
                        </p>
                        <p
                          style={styles.iconCity}
                        >
                          <M.LocationOnIcon />
                          <span
                            style={styles.subCity}
                          >
                            {ele.city}
                          </span>
                        </p>
                      </article>
                    </article>
                    <M.Box
                      sx={styles.sectionBtnClassified}
                    >
                      <button
                        type="button"
                        style={{ ...styles.sectionClassifiedButton, ...styles.btnChatClassified }}
                      >
                        <M.ChatIcon
                          sx={{ backgroundColor: '#1a6e9a', marginLeft: '12px' }}
                        />
                        ارسل رسالة
                      </button>
                      <button
                        type="button"
                        style={{ ...styles.sectionClassifiedButton, ...styles.btnCallClassified }}
                      >
                        <M.LocalPhoneIcon
                          sx={{ marginLeft: '12px' }}
                        />
                        <M.Link
                          href={`tel:${ele.phone}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          إتصل بالمعلن
                        </M.Link>
                      </button>
                    </M.Box>
                  </M.Box>
                </M.Box>
              )))
              : <h2> لا يوجد بيانات لعرضها يرجى المحاولة مرة اخرى </h2>
            : <h1>يرجى الانتظار ....</h1>}
          <M.Pagination
            count={Math.ceil(count / 10)}
            variant="outlined"
            shape="rounded"
            color="primary"
            page={page}
            onChange={handlePageChange}
            sx={
          {
            display: 'flex',
            justifyContent: 'center',
            py: '3rem',
          }
        }
          />
          {auth ? (
            ''
          ) : (
            <M.Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <M.Box sx={style.modal}>
                {manageModal ? (
                  <LoginForm setManageModal={setManageModal} />
                ) : (
                  <RegisterForm setManageModal={setManageModal} />
                )}
              </M.Box>
            </M.Modal>
          )}
        </M.Box>
      </M.Box>
    </M.Container>
  );
};

PaginationClassified.propTypes = {
  search: propTypes.string.isRequired,
};

export default PaginationClassified;
