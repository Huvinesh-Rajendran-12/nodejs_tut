// load express module
const express = require('express');
// load path module
const path = require('path');
// load body-parser module
const bodyParser = require('body-parser');
// define app
const app = express();
// define port
const port = 3000;
// app use module
app.use('/public', express.static(path.join(__dirname, 'static')));
// app use body-parser
app.use(bodyParser.urlencoded({extended: false}));
// app use body-parser json
app.use(bodyParser.json());
// app get method
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index2.html'));
});
// app post method
app.post('/', (req, res) => {
//  console.log(req.body);
  // database call
  res.json({success: true});
});
// app listen method
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
