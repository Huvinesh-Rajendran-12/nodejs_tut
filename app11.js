// load express module
const express = require('express');
// load path module
const path = require('path');
// load body-parser module
const bodyParser = require('body-parser');
// load joi module
const Joi = require('joi');
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
  res.sendFile(path.join(__dirname, 'static', 'index3.html'));
});
// app post method
app.post('/', (req, res) => {
  console.log(req.body);
  const schema = Joi.object({
    email: Joi.string().trim().email().required(),
    password: Joi.string().min(5).max(10).required(),
  });
  const {error} = schema.validate(req.body);
  if (error) {
    res.send(error.details[0].message);
  } else {
    res.send('Success');
  }
});
// app listen method
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
