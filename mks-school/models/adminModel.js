const db = require('../db'); // Import the database connection

// Admin model
const Admin = {
  getAllAdmins: (callback) => {
    db.query('SELECT * FROM admin_detail', (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

//   createAllAdmins: (callback) => {
//     db.query('INSERT * FROM admin_detail', (err, results) => {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, results);
//       }
//     });
//   }

// exact query malai yaad chaina/
};


// yeta chai timro sabai base level SQL QUERY lekhne thau ho, aba Create ko lagi INSERT INTO..... vanera banaune
module.exports = Admin;
