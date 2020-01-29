const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ api: 'API is running' });
});

module.exports = router;
