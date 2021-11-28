import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';

import { CssBaseline, ThemeProvider } from './mui-modules';

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
        <Route path="*" element={<Pages.NotFound />} />
      </Routes>
    </Router>

  </ThemeProvider>
);

export default App;
