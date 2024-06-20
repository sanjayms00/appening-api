const userModel = require("../../model/userSchema/user.schema");
const authHelper = require("../../helpers/auth.helper");
//login function
const login = async (req, res, next) => {
  try {
  } catch (error) {
    //Pass error to the error middleware
    next(error);
  }
};

//signup function
const signUp = async (req, res, next) => {
  try {
    //get the form data
    const { email, password, type } = req.body;

    if (!email || !password || !type) {
      throw new Error(
        "Missing credentials (email, password and type are required)"
      );
    }

    //find user exist
    const userExist = await userModel.findOne({ email });

    if (userExist) {
      throw new Error("User already exist, login to your account");
    }

    //hash password
    const hashedPassword = await authHelper.hashPassword(password);
    //create user
    const createdUser = await new userModel({
      email,
      password: hashedPassword,
      type,
    }).save();

    if (!createdUser) {
      throw new Error("Unable to create the user");
    }

    //delete created user password
    delete createdUser.password;

    //create json web token
    const { token, payload } = await authHelper.createJwtToken(createdUser);

    //success response
    res.status(200).json({
      status: true,
      message: "User created successfully",
      data: payload,
      token,
    });
  } catch (error) {
    //Pass error to the error middleware
    next(error);
  }
};

//exporting functions
module.exports = {
  login,
  signUp,
};
