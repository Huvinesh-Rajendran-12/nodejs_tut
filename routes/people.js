// load express module
const express = require('express');
// define express router
// eslint-disable-next-line new-cap
const router = express.Router();
// add time middleware
router.use(function(req, res, next) {
  console.log('Time:', Date.now());
  next();
});
// get route
router.get('/', (req, res)=>{
  res.send('Hello World');
});
// get route example
router.get('/example', (req, res)=>{
  res.send('Example Hello World');
});

module.exports = router;
