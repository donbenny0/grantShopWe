const express = require('express');
const router = express.Router();
// 
const { createUser, authenticate, test } = require('../controllers/userController');
// 

// for test
router.get('/test', test);


// -------------------------------------------------------------------
// create user
router.post('/createuser', createUser);


// authenticate user
router.post('/authenticate', authenticate);

module.exports = router;