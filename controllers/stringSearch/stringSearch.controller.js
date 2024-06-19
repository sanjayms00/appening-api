const stringSearchHelper = require("../../helpers/stringSearch.helper");
//String array
const stringArr = ["Race", "Part", "Heart", "Listen"];

//check the word is anagram and is in the array
const checkAnagram = async (req, res, next) => {
  try {
    //make array data lowercase
    const lowerCaseArray = await stringSearchHelper.arrayToLowerCase(stringArr);

    if (!lowerCaseArray) {
      throw new Error("Word array is not found");
    }

    const { word } = req.params;

    if (!word.trim()) {
      throw new Error("Word parameter is reqired");
    }

    const wordArr = word.toLowerCase().split("").sort();

    //check anagram
    const isAnagram = await stringSearchHelper.isAnagram(
      lowerCaseArray,
      wordArr
    );

    if (!isAnagram) {
      return res.status(404).json({
        status: false,
        message: "The words anagram is not present in the array",
        value: false,
      });
    }

    //true response
    return res.status(200).json({
      status: true,
      message: "The words anagram is present in the array",
      value: true,
    });
  } catch (error) {
    //Pass error to the error middleware
    next(error);
  }
};

//exporting functions
module.exports = {
  checkAnagram,
};
