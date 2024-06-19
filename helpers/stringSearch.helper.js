//Array elements to lowercase
const arrayToLowerCase = (arr) => {
  if (arr.length <= 0) return false;

  return arr.map((item) => {
    return item.toLowerCase();
  });
};

const isAnagram = (lowerCaseArray, wordArr) => {
  let validAnagram = false;
  let wordStringify = JSON.stringify(wordArr);

  for (let item of lowerCaseArray) {
    let strArr = item.split("").sort();
    if (JSON.stringify(strArr) === wordStringify) {
      validAnagram = true;
      break;
    }
  }
  return validAnagram;
};

//exporting functions
module.exports = {
  arrayToLowerCase,
  isAnagram,
};
