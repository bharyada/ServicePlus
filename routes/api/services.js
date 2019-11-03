const express = require('express');
const router = express.Router();

// @route   GET api/services
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Service route'));

module.exports = router;
