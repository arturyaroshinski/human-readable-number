module.exports = function toReadable(number) {
    let digits = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let elevenTwenty = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    let tenNinety = {
        10: "ten",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const isFirstDigitOne = (num) => {
        let first = Math.floor(num / 10);
        if (first === 1) return elevenTwenty[10 + (num % 10)];
        else return false;
    };

    const parseNumberWithTwoDigits = (number) => {
        if (isFirstDigitOne(number)) return isFirstDigitOne(number);
        else {
            if (number % 10 === 0) return tenNinety[number];
            return (
                tenNinety[Math.floor(number / 10) * 10] +
                " " +
                digits[number % 10]
            );
        }
    };

    const parseNumberWithThreeDigits = (num) => {
        let res = digits[Math.floor(num / 100)] + " hundred";
        if (num % 100 === 0) return res;

        if (Math.floor(num / 10) % 10 === 0)
            return res + " " + digits[num % 10];

        const strNum = String(num % 100);
        return res + " " + parseNumberWithTwoDigits(parseInt(strNum));
    };

    switch (String(number).length) {
        case 1:
            return digits[number];
        case 2:
            return parseNumberWithTwoDigits(number);
        case 3:
            return parseNumberWithThreeDigits(number);
        default:
            return;
    }
};
