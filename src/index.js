const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrBin = [];
    let oneWord = '';
    for (let i = 0; i < expr.length; i++) {
        oneWord = oneWord + expr[i];
        if (oneWord.length === 10) {
            arrBin.push(oneWord);
            oneWord = '';
        }
    }
    let finalStr = '';
    arrBin.forEach(str => {
        let newStr = '';
        for (let i = 0; i <= 8; i = i + 2) {
            let sym = `${str[i]}${str[i + 1]}`;
            if (sym === '00') {
                newStr += '';
            } else if (sym === '10') {
                newStr += '.';
            } else if (sym === '11') {
                newStr += '-';
            }
        }
        finalStr += MORSE_TABLE[newStr] || ' ';
    })
    return finalStr;
}

module.exports = {
    decode
}