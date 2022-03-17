// load express module
const express = require('express');
// load path module
const path = require('path');
// define app
const app = express();

// static
app.use('/public', express.static(path.join(__dirname, 'static')));
// set ejs engine
app.set('view engine', 'ejs');
// load people module from routes
const people = require('./routes/people');
// use people module
app.use('/people', people);

app.listen(3000);
