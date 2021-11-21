const app = require('./app');

const port = app.get('port');

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
