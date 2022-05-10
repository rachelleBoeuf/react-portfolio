const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

//setup handlebars defaults
app.set('view engine', 'tmpl');
app.engine(
  'tmpl',
  handlebars({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'tmpl',
  })
);
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log('Now listening on: ' + PORT));
