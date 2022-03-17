// load express module
const express = require('express');
// load path module
const path = require('path');
// define app
const app = express();
// define port
const port = 3000;
// app use module
app.use('/public', express.static(path.join(__dirname, 'static')));
// app get method
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
// app listen method
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
