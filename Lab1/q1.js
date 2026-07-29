const towords =(digit) => {
    switch(digit) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        default:
            return "invalid input";
    }
};

//console.log(towords(5));
//console.log(towords(10));
//console.log(towords(3));
//console.log(towords(-1));


const rollnum ="123456789";
const digit = String(rollnum).split("");
console.log(digit);

let inWords = "";
digit.forEach((d) => {
    inWords += " " + toWords(Number(d));
});
console.log(inWords);
