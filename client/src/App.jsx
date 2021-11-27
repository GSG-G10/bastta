import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from './mui-modules';
import Home from './pages';
import { Dashboard, DashboardLogin } from './pages/Dashboard';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/*" element={<DashboardLogin />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
