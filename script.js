function capitalize(string){
    const firstLetter = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    return firstLetter + rest;
}

function reverseString(string){
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

module.exports = {capitalize, reverseString};
