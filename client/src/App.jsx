import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from './mui-modules';
import * as utils from './utils';
import * as actions from './store/actions';

import * as Pages from './pages';
import { Snakbar } from './components';

import theme from './theme';

const App = () => {
  const dispatch = useDispatch();
  const {
    notification: { message, type },
  } = useSelector((state) => state);

  /* Effect Check Authentication */
  useEffect(async () => {
    const {
      data: { userId },
    } = await utils.checkAuth();
    dispatch(actions.createAuth(userId));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {message ? <Snakbar message={message} type={type} /> : null}
      <Router>
        <Routes>
          <Route exact path="/" element={<Pages.Home />} />
          <Route exact path="/about-us" element={<Pages.Document />} />
          <Route exact path="/dashboard" element={<Pages.Dashboard />} />
          <Route exact path="/admin/*" element={<Pages.DashboardLogin />} />
          <Route exact path="/profile/:UserID" element={<Pages.ProfileUser />} />
          <Route exact path="/chat" element={<Pages.Chat />} />
          <Route
            exact
            path="/product/:search"
            element={<Pages.ClassifiedProduct />}
          />
          <Route
            exact
            path="/products/:slug"
            element={<Pages.SingleProductPage />}
          />
          <Route path="/error" element={<Pages.Error500 />} />
          <Route path="*" element={<Pages.Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
