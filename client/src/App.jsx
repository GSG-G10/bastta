import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from './mui-modules';
import theme from './theme';

const App = () => (

  <ThemeProvider theme={theme}>

    <CssBaseline />
    <Router>
      <Switch>
      </Switch>
    </Router>
  </ThemeProvider>

);

export default App;
