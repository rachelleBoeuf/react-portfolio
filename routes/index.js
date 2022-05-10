const router = require('express').Router();

const pageRoutes = require('./pageRoutes.js');
router.use('/', pageRoutes);

module.exports = router;
