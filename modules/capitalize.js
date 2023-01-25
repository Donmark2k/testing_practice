function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  function capitalizeString(str) {
    if (typeof str === 'string' && str.trim() !== '') {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return 'Input is not a valid string';
  }
 
  module.exports = capitalize;