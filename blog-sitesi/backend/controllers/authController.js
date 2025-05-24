const User = require('../models/User');

exports.login = async (req, res) => {
  try {
 
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

