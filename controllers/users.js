const User = require("../models/user");

const signup = async (req, res) => {
  try {
    // TODO: Send back a JWT instead of the user
    res.json(await User.create(req.body));
  } catch (error) {
    // Probably a schema error
    res.status(400).json(error);
  }
};

module.exports = {
  signup,
};
