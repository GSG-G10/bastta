import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';

import { CssBaseline, ThemeProvider } from './mui-modules';
import Home from './pages';
import theme from './theme';

const App = () => (

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    <Footer />
  </ThemeProvider>
);

export default App;
