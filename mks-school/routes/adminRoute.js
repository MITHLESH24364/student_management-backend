const express = require('express');
const router = express.Router();
const admin = require('../controllers/adminController');

// Define the admin route
router.get('/', admin.getAllAdmins);

// router.post('/', admin.createAllAdmins); 
// ^for example


// aba yesari nai CRUD ko sabai request ko lagi chuttai blocks of code lekhne
// 
module.exports = router;
