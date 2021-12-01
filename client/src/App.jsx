import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import { CssBaseline, ThemeProvider } from './mui-modules';
import { Filter } from './components';

import * as Pages from './pages';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route exact path="/" element={<Pages.Home />} />
        <Route exact path="/doc" element={<Pages.Document />} />
        <Route exact path="/dashboard" element={<Pages.Dashboard />} />
        <Route exact path="/admin/*" element={<Pages.DashboardLogin />} />
        <Route exact path="/filter" element={<Filter />} />
        <Route path="/error" element={<Pages.Error500 />} />
        <Route path="*" element={<Pages.Error404 />} />
      </Routes>
    </Router>

  </ThemeProvider>
);

export default App;
