const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Password hasing function
const hashPassword = (password) => {
  if (!password) {
    throw new Error("Password not found");
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

//Token generate function
const createJwtToken = (createdUser) => {
  if (!createdUser) {
    throw new Error("User data not found");
  }
  const payload = {
    _id: createdUser._id,
    email: createdUser.email,
    type: createdUser.type,
  };
  const secretKey = process.env.PRIVATE_KEY;
  const options = {
    expiresIn: "1h",
  };

  const token = jwt.sign(payload, secretKey, options);
  return { token, payload };
};

module.exports = {
  hashPassword,
  createJwtToken,
};
