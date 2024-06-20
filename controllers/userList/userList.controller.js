const userModel = require("../../model/userSchema/user.schema");

//Find all the user data
const userList = async (req, res, next) => {
  try {
    //get all user data
    //project and exclude password and __v
    const userData = await userModel.find({}, { password: 0, __v: 0 });

    //success response
    res.status(200).json({
      status: true,
      message: "User list reteived successfully",
      data: userData,
    });
  } catch (error) {
    //Pass error to the error middleware
    next(error);
  }
};

//exporting functions
module.exports = {
  userList,
};
