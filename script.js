function capitalize(string) {
    const firstLetter = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    return firstLetter + rest;

  }

module.exports = capitalize;