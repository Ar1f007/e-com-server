const User = require('../models/userModel');

exports.register = async (req, res) => {
  console.log(req.body);
  res.send('register');
};
