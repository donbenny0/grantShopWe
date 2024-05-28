const express = require('express');
const router = express.Router();
// 
const { createUser, test } = require('../controllers/userController');
// 

// for test
router.get('/test', test);


// -------------------------------------------------------------------
// create user
router.post('/createuser', createUser);

module.exports = router;