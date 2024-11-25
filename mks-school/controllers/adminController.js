const Admin = require('../models/adminModel');

// Admin controller
const adminController = {
  getAllAdmins: (req, res) => {
    Admin.getAllAdmins((err, results) => {
      if (err) {
        return res.status(500).send('Error fetching data');
      }
      res.json(results);
    });
  }


//   ani aba yeta chai FUNCTION banaucha, request, response ko code huncha
};

module.exports = adminController;
