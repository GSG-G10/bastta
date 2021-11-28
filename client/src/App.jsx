import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/footer';

import { CssBaseline, ThemeProvider } from './mui-modules';
import * as P from './pages';
import theme from './theme';

const App = () => (

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/" component={P.Home} />
        <Route exact path="/doc" component={P.Document} />
      </Switch>
    </Router>
    <Footer />
  </ThemeProvider>
);

export default App;
