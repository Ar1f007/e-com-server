const User = require('../models/userModel');
const CryptoJS = require('crypto-js');

exports.register = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SECRET).toString(),
  });

  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.login = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET);

    const dbPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (dbPassword !== req.body.password) {
      return res.status(404).json({ message: 'Invalid credentials' });
    }

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (error) {
    res.status(404).json(error);
  }
};
