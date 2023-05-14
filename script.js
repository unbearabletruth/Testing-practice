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

function caesarCipher(string, shift){
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt() + shift;
        if (string[i].charCodeAt() < 97 || string[i].charCodeAt() > 122){
            newString += string[i];
        }
        else if (charCode > 122){
            let dif = charCode - 122;
            charCode = 96 + dif;
            newString += String.fromCharCode(charCode);
        } else {
            newString += String.fromCharCode(charCode);
        }
        
    }
    return newString;
}

function analyseArray(array){  
    
    const average = () => {
        let avg;
        let sum = 0;
        for (let number of array){
        sum += number;
    }
    avg = sum / array.length;
    return avg;
    }

    const min = () => {
        let min = array[0];
        for (let number of array){
            if (number < min){
                min = number;
            }
        }
        return min;
    }

    const max = () => {
        let max = 0;
        for (let number of array){
            if (number > max){
                max = number;
            }
        }
        return max;
    }

    const length = () => {
        return array.length;
    }

    let object = {
        average: average(),
        min: min(),
        max: max(),
        length: length()
    };  
    
    return object;  
}

module.exports = {capitalize, reverseString, Calculator, caesarCipher, analyseArray};
