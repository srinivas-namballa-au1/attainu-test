let strToInt = (str) => {
    let newStr = Number(str);

    if(Number.isNaN(newStr)) {
        return 0;
    }

    return newStr;
};

console.log(strToInt("10"));     // Returns 10
console.log(strToInt("-21"));     // Returns -21
console.log(strToInt("             11"));     // Returns 11. Notice the space in input.
console.log(strToInt("18            "));     // Returns 18. Notice the space at the end of the input.
console.log(strToInt("attainu10"));     // Returns 0 as a character other than space is in the string.