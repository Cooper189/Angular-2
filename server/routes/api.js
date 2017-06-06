const express = require('express');
const router = express.Router();
var file = require('../../common/main')


/* GET api listing. */
router.get('/posts', (req, res) => {
  console.log(file)
  res.send(file);
});

module.exports = router;