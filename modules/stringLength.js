function stringLength(string) {
    return string.length;
  }
  
module.exports = stringLength;

function stringLength1(string) {
    if (string.length < 1) {
      throw new Error("String must be at least 1 character long");
    } else if (string.length > 10) {
      throw new Error("String must not be longer than 10 characters");
    } else {
      return string.length;
    }
  }
  
  
  module.exports = stringLength1;


  const stringLength2 = (str) => {
    if (str.length > 0 && str.length < 11) {
      return str.length;
    }
    return 'Conditions are not met';
  };

  module.exports = stringLength2;
