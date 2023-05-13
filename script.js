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

class Calculator {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    add(){
        return this.x + this.y;
    }

    substract(){
        return this.x - this.y;
    }

    multiply(){
        return this.x * this.y;
    }

    divide(){
        return this.x / this.y;
    }
}

module.exports = {capitalize, reverseString, Calculator};
