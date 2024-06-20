const jwt = require("jsonwebtoken");

//function to check user is admin or not
const checkAdmin = (req, res, next) => {
  try {
    //destructure authorization from headers
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("No Bearer token found in the headers");
    }

    //Split the token
    const accessToken = authorization.split(" ")[1];

    if (!accessToken) {
      throw new Error("Bearer token is not properly formatted");
    }

    jwt.verify(accessToken, process.env.PRIVATE_KEY, (err, payload) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Invalid token",
        });
      }
      if (payload.type !== "admin") {
        return res.status(403).json({
          success: false,
          message: "Access forbidden",
        });
      }
      next();
    });
  } catch (err) {
    next(err);
  }
};

//export functions
module.exports = {
  checkAdmin,
};
