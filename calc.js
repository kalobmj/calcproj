// important btns
const clearBtn = document.getElementById('clear-btn');
const parBtn = document.getElementById('par-btn');
const perBtn = document.getElementById('per-btn');
const divideBtn = document.getElementById('op-btn-divide');
const multiplyBtn = document.getElementById('op-btn-multiply');
const subtractBtn = document.getElementById('op-btn-subtract');
const addBtn = document.getElementById('op-btn-add');
const equalsBtn = document.getElementById('equals-btn');
const logBtn = document.getElementById('log-btn');
const backBtn = document.getElementById('back-btn');

// basic btns
const sevenBtn = document.getElementById('7-btn');
const eightBtn = document.getElementById('8-btn');
const nineBtn = document.getElementById('9-btn');
const fourBtn = document.getElementById('4-btn');
const fiveBtn = document.getElementById('5-btn');
const sixBtn = document.getElementById('6-btn');
const oneBtn = document.getElementById('1-btn');
const twoBtn = document.getElementById('2-btn');
const threeBtn = document.getElementById('3-btn');
const posNegBtn = document.getElementById('pos-neg-btn');
const zeroBtn = document.getElementById('0-btn');
const decimalBtn = document.getElementById('decimal-btn');

// main calc area
const calcArea = document.getElementById('input-btn-container');
// const calcStyles = getComputedStyle(calcArea);
// let calcDisplay = calcStyles.getPropertyValue('display');

// log area
const logContainer = document.getElementById('log-container');
const logArea = document.getElementById('log-area');
const clearHistoryBtn = document.getElementById('log-clear-btn');

// solution
let displayedSolution = document.getElementById('displayed-solution');

// variables
let currNum = 0; // current Num we are working with
let localStr = '0'; // str to be displayed on calculator
let posNeg = 1; // 1 = pos num, 2 = neg num. reset on clear
let localOpArr = [];
let localNumArr = [];

// number btn addEventListeners
zeroBtn.addEventListener('click', () => {
    if (localStr != '') { // if str is not empty
        if (localStr[localStr.length-1] === ')') { // if last elem is )
            localStr += 'x';
            localStr += '0';
            displayedSolution.innerText = localStr;
        } else if (localStr != '0') { // if str not empty and not 0
            localStr += '0';
            formatNumber(localStr); // formatNumber func updates localStr and solution for you.
        }
    };
});

oneBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '1';
        displayedSolution.innerText = localStr; // no need to format because after the bracket is only a single 1
    } else {
        if (localStr === '0') {
            localStr = '1';
            displayedSolution.innerText = localStr; // format not needed
        } else {
            localStr += '1';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        }
    }
});

twoBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '2';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '2';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '2';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        }
    };
});

threeBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '3';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {

            localStr = '3';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '3';
            formatNumber(localStr);
            displayedSolution.innerText = localStr;
        };
    };
});

fourBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '4';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {

            localStr = '4';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '4';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    };
});

fiveBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '5';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '5';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '5';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    };
});

sixBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '6';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '6';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '6';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    };
});

sevenBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '7';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '7';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '7';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    }
});

eightBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '8';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '8';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '8';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    }
});

nineBtn.addEventListener('click', () => {
    if (localStr[localStr.length-1] === ')') {
        localStr += 'x';
        localStr += '9';
        displayedSolution.innerText = localStr;
    } else {
        if (localStr === '0') {
            localStr = '9';
            displayedSolution.innerText = localStr;
        } else {
            localStr += '9';
            formatNumber(localStr); // should format and update localStr
            displayedSolution.innerText = localStr;
        };
    }
});

backBtn.addEventListener('click', () => {
    if (localStr.length === 1 || localStr.length === 0) {
        localStr = '';
        displayedSolution.innerText = '0';
    } else {
        localStr = localStr.slice(0, -1);
        displayedSolution.innerText = localStr;
    };
});

logBtn.addEventListener('click', () => {
    if (getComputedStyle(calcArea).getPropertyValue('display') === 'flex') {
        calcArea.style.display = 'none';
        logContainer.style.display = 'flex';
    } else {
        calcArea.style.display = 'flex';
        logContainer.style.display = 'none';
    };
});

clearHistoryBtn.addEventListener('click', () => {
    let paragraphs = logArea.querySelectorAll("p");
    paragraphs.forEach(p => p.remove());
});

// operator btn addEventListeners
divideBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷]/g;
    if (localStr != '' && !regex.test(localStr[localStr.length - 1])) {
        if (localStr[localStr.length - 1] === '.') {
            if (!regex.test(localStr[localStr.length - 2])) {
                localStr += ' ';
                localStr += '÷';
                localStr += ' ';
                displayedSolution.innerText = localStr;
                return;
            } else {
                return;
            }
        };
        if (localStr[localStr.length - 1] === ' ') {
            // if last elem in localStr is a whitespace
            if (!regex.test(localStr[localStr.length - 2])) {
                // if 2nd to last elem in localStr is not an operator
                localStr += ' ';
                localStr += '÷';
                localStr += ' ';
                displayedSolution.innerText = localStr;
            }
        } else {
            // default behavior
            localStr += ' '; // whitespace for readability
            localStr += '÷';
            localStr += ' '; // whitespace for readability
            displayedSolution.innerText = localStr;
        };
    }
});

multiplyBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷]/g;
    if (localStr != '' && !regex.test(localStr[localStr.length - 1])) {
        if (localStr[localStr.length - 1] === '.') {
            if (!regex.test(localStr[localStr.length - 2])) {
                localStr += ' ';
                localStr += 'x';
                localStr += ' ';
                displayedSolution.innerText = localStr;
                return;
            } else {
                return;
            }
        };
        if (localStr[localStr.length - 1] === ' ') {
            // if last elem in localStr is a whitespace
            if (!regex.test(localStr[localStr.length - 2])) {
                // if 2nd to last elem in localStr is not an operator
                localStr += ' ';
                localStr += 'x';
                localStr += ' ';
                displayedSolution.innerText = localStr;
            }
        } else {
            // default behavior
            localStr += ' '; // whitespace for readability
            localStr += 'x';
            localStr += ' '; // whitespace for readability
            displayedSolution.innerText = localStr;
        };
    }
});

subtractBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷]/g;
    if (localStr != '' && !regex.test(localStr[localStr.length - 1])) {
        if (localStr[localStr.length - 1] === '.') {
            if (!regex.test(localStr[localStr.length - 2])) {
                localStr += ' ';
                localStr += '–';
                localStr += ' ';
                displayedSolution.innerText = localStr;
                return;
            } else {
                return;
            }
        }
        if (localStr[localStr.length - 1] === ' ') {
            // if last elem in localStr is a whitespace
            if (!regex.test(localStr[localStr.length - 2])) {
                // if 2nd to last elem in localStr is not an operator
                localStr += ' ';
                localStr += '–';
                localStr += ' ';
                displayedSolution.innerText = localStr;
            }
        } else {
            // default behavior
            localStr += ' '; // whitespace for readability
            localStr += '–';
            localStr += ' '; // whitespace for readability
            displayedSolution.innerText = localStr;
        };
    }

});

addBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷]/g;
    // formatNumber(localStr); formatNumber might be invoking and i'm not sure why.. 
    if (localStr != '' && !regex.test(localStr[localStr.length - 1])) {
        if (localStr[localStr.length - 1] === '.') {
            if (!regex.test(localStr[localStr.length - 2])) {
                localStr += ' ';
                localStr += '+';
                localStr += ' ';
                displayedSolution.innerText = localStr;
                return;
            } else {
                return;
            }
        }
        if (localStr[localStr.length - 1] === ' ') {
            // if last elem in localStr is a whitespace
            if (!regex.test(localStr[localStr.length - 2])) {
                // if 2nd to last elem in localStr is not an operator
                localStr += ' ';
                localStr += '+';
                localStr += ' ';
                displayedSolution.innerText = localStr;
            }
        } else {
            // default behavior
            localStr += ' '; // whitespace for readability
            localStr += '+';
            localStr += ' '; // whitespace for readability
            displayedSolution.innerText = localStr;
        };
    }

});

// percent, par, pos/neg, decimal addEventListeners
perBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷|(|-]/g;
    if (!localStr.includes('%') && localStr != '') {
        if (!regex.test(localStr[localStr.length -1])) {
            if (localStr[localStr.length - 1] === '.') {
                if (!isNaN(localStr[localStr.length - 2])) {
                    localStr += '%';
                    displayedSolution.innerText = localStr;
                }
            } else {
                localStr += '%';
                displayedSolution.innerText = localStr;
            };
        };
    };

});


parBtn.addEventListener('click', () => {
    let regex = /[(|)]/;
    let parCheck = 0;
    if (localStr === '0') {
        localStr = '(';
        displayedSolution.innerText = localStr;
        return;
    }
    for (let i = localStr.length - 1; i >= 0; i--) {
        if (regex.test(localStr[i])) {
            if (localStr[i] === '(') {
                parCheck = 1;
                break;
            }
            if (localStr[i] === ')') {
                parCheck = 0;
                break;
            }
        }
    }
    if (parCheck === 0) {
        let regex2 = /[+|\–|x|÷|%|.]/
        if (localStr[localStr.length - 1] === ' ') {

            if (regex.test(localStr[localStr.length - 2])) {
                localStr += '(';
                displayedSolution.innerText = localStr;
                parCheck = 1;
                return;
            }

        }
        if (regex2.test(localStr[localStr.length - 2])) {
            if (!isNaN(localStr[localStr.length - 4])) {
                localStr += '(';
                displayedSolution.innerText = localStr;
                parCheck = 1;
                return;
            }
            if (localStr[localStr.length - 4] === ')') {
                if (!isNaN(localStr[localStr.length - 5])) {
                    localStr += '(';
                    displayedSolution.innerText = localStr;
                    parCheck = 1;
                    return;
                }
            }
        }
        if (regex.test(localStr[localStr.length - 1])) {
            if (!isNaN(localStr[localStr.length - 2])) {
                localStr += 'x';
                localStr += '(';
                displayedSolution.innerText = localStr;
                parCheck = 1;
                return;
            }
            if (localStr[localStr.length - 2] === '.') {
                if (!isNaN(localStr[localStr.length - 3])) {
                    localStr += 'x';
                    localStr += '(';
                    displayedSolution.innerText = localStr;
                    parCheck = 1;
                    return;
                }
            }
        }
        if (localStr === '') {
            localStr = '(';
            displayedSolution.innerText = localStr;
            parCheck = 1;
        }
    }
    if (parCheck === 1) {
        if (!isNaN(localStr[localStr.length - 1]) && localStr[localStr.length - 1] != ' ') {
            localStr += ')';
            displayedSolution.innerText = localStr;
            parCheck = 0;
            return;
        }
        if (localStr[localStr.length - 1] === '.') {
            if (!isNaN(localStr[localStr.length - 2])) {
                localStr += ')';
                displayedSolution.innerText = localStr;
                parCheck = 0;
                return;
            }
        }
    }
});

posNegBtn.addEventListener('click', () => {
    let localStrLen = localStr.length,
        p = 0,
        gotChanged = 0;
    for (char of localStr) {
        if (!isNaN(char) || char === '.') {
            p++
        };
    };
    if (p === localStrLen) {
        localStr = '-' + localStr;
        displayedSolution.innerText = localStr;
        return;
    };
    for (let i = localStrLen - 1; i >= 0; i--) {
        if (!(isNaN(localStr[i]))) {
            for (let j = i-1; j >= 0; j--) {
                if (isNaN(localStr[j]) && localStr[j] != '.') {
                    if (localStr[j] === '-') {
                        if (gotChanged === 0) {
                            localStr = localStr.slice(0, j) + localStr.slice(j+1);
                            displayedSolution.innerText = localStr;
                            gotChanged = 1;
                        };
                    } else {
                        if (gotChanged === 0) {
                            localStr = localStr.slice(0, j+1) + '-' + localStr.slice(j+1);
                            displayedSolution.innerText = localStr;
                            gotChanged = 1;
                        };
                    };
                };
            };
        };
    };

});

decimalBtn.addEventListener('click', () => {
    let regex = /[+|\–|x|÷|-|%]/g
    let p = 0;
    for (let i = localStr.length - 1; i >= 0; i--) {
        if (regex.test(localStr[i])) {
            break;
        };
        if (localStr[i] === '.') {
            p++;
        };
    };
    if (p === 0) {

        localStr += '.';
        displayedSolution.innerText = localStr;

    };
});

// clear btn
clearBtn.addEventListener('click', () => {
    let paragraphs = logArea.querySelectorAll("p");
    paragraphs.forEach(p => p.remove());
    localStr = '0';
    displayedSolution.innerText = '0';
});

// equals btn
equalsBtn.addEventListener('click', () => {
    let testLocalString = localStr.split('');
    invalidFormatChecker(localStr);
    let localEqualsStr = localStr;
    prepSol(localStr);
    calcSol(localOpArr, localNumArr);
    if (localStr === 'NaN') {
        localStr = 'Result is undefined';
        displayedSolution.innerText = localStr;
        return;
    } else {
        if (String(currNum) === localStr) {
            displayedSolution.innerText = localStr;
            return;
        }
        localStr = String(currNum); // 
        let logTextEntry = `${localEqualsStr} = ${currNum}`;
        let localParagraph = document.createElement("p");
        localParagraph.textContent = logTextEntry;
        document.getElementById('log-area').appendChild(localParagraph);
        displayedSolution.innerText = localStr;
    };

});

// func to check if equation is valid format
function invalidFormatChecker(str) {
    const regex = /[+|\–|x|÷|%|(| ]/;
    if (regex.test(localStr[localStr.length - 1])) {
        localStr = 'NaN';
    }

};

// func to formats localStr numbers with each new number
function formatNumber(localStr) {
    let currNumStr = '', // 123456
            currNumStart,
            currNumEnd;
        for (let i = localStr.length - 1; i >= 0; i--) {
            if (!isNaN(localStr[i]) || localStr[i] === ',' || localStr[i] === '.') {
                if (!isNaN(localStr[i]) || localStr[i] === '.') {
                    currNumStr += localStr[i];
                    if (i === 0) {
                        currNumStart = i; // string is number
                        currNumEnd = localStr.length -1;
                    }
                };
            } else {
                currNumStart = i+1;
                currNumEnd = localStr.length - 1;
                break;
            };
        };
        // begin here currNumStr is evaluated and the indicies are aswell. need to splice the new string into localStr...
        currNumStr = currNumStr.split('').reverse().join('');
        let deleteCountStr = (currNumEnd - currNumStart) + 1; // 7
        localStr = localStr.split('');
        currNumStr = currNumStr.split('');
        if (localStr.length === currNumStr.length) { // same len
            localStr = currNumStr;
            localStr = localStr.join('');
            localStr = Number(localStr).toLocaleString('en-US'); // string formatted
            displayedSolution.innerText = localStr;
            // works so far.. now will work on full equation
        } else { // different len
            currNumStr = currNumStr.join(''); // string joined for fomratting before splice
            let possibleWhiteSpace = currNumStr;
            currNumStr = Number(currNumStr).toLocaleString('en-US'); // str now formatted correctly.
            if (possibleWhiteSpace[0] === ' ') {
                currNumStr = ' ' + currNumStr;
            }
            currNumStr = currNumStr.split(''); // split again for splicing...
            localStr.splice(currNumStart, deleteCountStr, ...currNumStr); // localStr spliced
            localStr = localStr.join(''); // localStr joined back into a string
            displayedSolution.innerText = localStr;
        };
};

function prepSol(str) {
    let opArr = [],
        numArr = [],
        workingStr = '';
    const regex = /[+|\–|x|÷|%|)|(]/;
    if (localStr === 'NaN') {
        return;
    };
    if (localStr.includes(',')) {
        localStr = localStr.replaceAll(',', '');
    };
    if (localStr.includes(' ')) {
        localStr = localStr.replaceAll(' ', '');
    };
    for (const char of localStr) {
        if (regex.test(char)) {
            workingStr += ',';
            workingStr += char;
            workingStr += ',';
        } else {
            workingStr += char;
        }
    }
    workingStr = workingStr.split(','); // is now an array
    workingStr = workingStr.filter((char) => char !== '' && char !== undefined && !isNaN(char) || /[+|\–|x|÷|%|(|)]/.test(char)); // basically filters our characters that are not empty '', are not undefined, are numbers, and pass the regex test
    let totalTempWorkingStr = workingStr; // our str to iterate and not manipulate our original workingStr
    let parCount = 0;
    for (const char of totalTempWorkingStr) {
        let regex = /[(|)]/;
        if (regex.test(char)) {
            parCount++;
        }
    }
    if ((parCount % 2) != 0) {
        return; // ends prepSol func here
    };
    // every parenthesis equation will be solved within the for loop below. every iteration resets vars so each prep is fresh
    for (let i = 0; i < (parCount / 2); i++) {
        let par1 = [];
        let par2 = [];
        let parRegex1 = /[(]/;
        let parRegex2 = /[)]/;
        const regex2 = /[+|\–|x|÷|%|]/;
        for (let i = 0; i < workingStr.length; i++) {
            if (parRegex1.test(workingStr[i])) {
                par1.push(i);
            }
            if (parRegex2.test(workingStr[i])) {
                par2.push(i);
            }
        }
        opArr = [];
        numArr = [];
        let tempWorkingStr = workingStr.slice(Number(par1[0]) + 1, Number(par2[0]));
        for (const char of tempWorkingStr) {
            if (regex2.test(char)) {
                opArr.push(char) // operators to solve with
            }
            if (!isNaN(char)) {
                numArr.push(char) // nums to solve for
            }
        }
        currNum = Number(numArr[0]); // updated currNum to prep for calcSol
        calcSol(opArr, numArr); // solves equation in parentheses
        let deleteCount = (par2[0] - par1[0]) + 1;
        totalTempWorkingStr.splice(par1[0], deleteCount, String(currNum)); // deleted parenthesis equation from TWS. inserts new solved number
        workingStr = totalTempWorkingStr; // updating global str with our manipulated temp str
    };
    // at this point all parenthesis should be worked through
    opArr = [];
    numArr = [];
    const regex2 = /[+|\–|x|÷|%|]/;
    for (const char of workingStr) {
        if (regex2.test(char)) {
            opArr.push(char)
        } else {
            numArr.push(char)
        }
    }
    // prep for optional percent '%' goes here, will splice both arrays and update if found.
    if (opArr.includes('%')) {
        let perIndex = opArr.indexOf('%'),
            newNum = Number(numArr[perIndex]) / 100 * Number(numArr[perIndex + 1]);
        opArr.splice(perIndex, 1);
        numArr.splice(perIndex, 2, newNum);
    }
    currNum = Number(numArr[0]);
    localOpArr = opArr;
    localNumArr = numArr;

};

const calcSol = (localOpArr, localNumArr) => {
    if (localStr === 'NaN') {
        return;
    }
    if (localOpArr.length === 0 && localNumArr.length === 1) {
        // currNum already evaluated will be used in equals
        return;

    }
    let finalStr = '';
    for (let i = 0; i < localNumArr.length; i++) {
        if (localNumArr[i].includes('-')) {
            finalStr += '(';
            finalStr += localNumArr[i];
            finalStr += ')';
        } else {
            finalStr += localNumArr[i];
        } // if number is neg, place par around it. so eval can work
        if (!localOpArr[i]) {
            break;
        } else {
            // switch
            switch(localOpArr[i]) {
                case '÷':
                    finalStr += '/';
                    break;
                case 'x':
                    finalStr += '*';
                    break;
                case '–':
                    finalStr += '-';
                    break;
                case '+':
                    finalStr += '+';
                    break;
                default:
                    console.log('something went wrong here!');
                    break;
            }
        }
    }
    finalStr = finalStr.replace(',', '');
    currNum = eval(finalStr);
    currNum = parseFloat(currNum.toFixed(10));
    currNum = currNum.toLocaleString('en-US');

};