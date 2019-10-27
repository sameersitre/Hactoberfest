//2048
var matrix = [
    [2, 0, 0, 0],
    [2, 8, 0, 8],
    [16, 0, 2, 2],
    [2, 4, 8, 16]
];

var score = 0;
var emptyElementsArray = []
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var x=0, y=0 ;
getInput();
function getInput() {
    displayGame();
    console.log(emptyElementsArray);
    if (x === undefined || y === undefined) {
        console.log("Game Over!!!");
        rl.close();
        
    }
    else  {
    rl.question(x+" "+y+'\nUP(W) DOWN(S) LEFT(A) RIGHT(D) QUIT(Q)', answer => {
        enteredKey(answer);
    });
    }
}

/* -------------------KEY ENTERED CONDITIONS-------------------- */
function enteredKey(answer) {

    if (answer === 'a') {
        console.log('Shifted Left', answer);
        leftShifter();
        getInput();
    }
    else if (answer === 's') {
        console.log('Shifted Down', answer);
        downShifter();
        getInput();
    }
    /* -----RIGHT---- */
    else if (answer === 'd') {
        console.log('Shifted Right', answer);

        rightShifter();
        rowEqualElementsSum();
        findEmptyElements();
        randomInsertTwo();
       // console.clear();
        getInput();
    }
    else if (answer === 'w') {
        console.log('Shifted Top', answer);
        topShifter();
        getInput();
    }
    else if (answer === 'q') {
        console.log('Game Quitted');
        rl.close();
    }
    else {
        console.log('Wrong key pressed');
        getInput();
    }
}
/* ------------------DISPLAY------------------- */
function displayGame() {

    console.log("**** 2 0 4 8 ****\n\nScore : " + score + "\n\n")
    for (let i = 0; i < 4; i++) {
        console.log(matrix[i][0] + "\t" + matrix[i][1] + "\t" + matrix[i][2] + "\t" + matrix[i][3] + "\t\n")
    }
}

/* ------------------- shift right-------------------- */
function rightShifter() {

//extra k for the loop bcoz all 0's in row should be shifted to the left
    //SHIFT ZEROES IN THE LEFT
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            for (let j = 4; j > 0; j--) {
                if (matrix[i][j] === 0 && matrix[i][j - 1] != 0) {
                    matrix[i][j] = matrix[i][j - 1];
                    matrix[i][j - 1] = 0;
                }
            }
        }
    }
}
function rowEqualElementsSum() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j] == matrix[i][j + 1]) {
                //if left & right elements equal, right element multiplied by itself, & left element assigned to 0
                matrix[i][j + 1] *= 2
                matrix[i][j] = 0;
            }
        }
    }

}

/* -----------FIND EMPTY ELEMENTS----------- */
function findEmptyElements() {
    //find empty elements 
    emptyElementsArray = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j] == 0) {
                emptyElementsArray.push(i.toString() + j.toString())
            }
        }
    }
}


/* -----------------ADD 2 IN EMPTY RANDOM ELEMENTS------------------- */
function randomInsertTwo() {
    //emptyElementsArray = [];
    /* empty array->  emptyElementsArray= ['00', '01', '02', '10', '11', '20', '21', '30', '31', '32', '33' ] */
    //getting two random elementS from array emptyElementsArray

   x = emptyElementsArray[Math.floor(Math.random() * emptyElementsArray.length)];
    //now, adding 2 in matrix of random index  
    try{
          matrix[x.charAt(0)][x.charAt(1)] = 2;
    }
    catch(err){
       
    }
      
    



}

function leftShifter() {
    //adding equal numbers in a row
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                matrix[i][j] *= 2;
                matrix[i][j + 1] = 0;
            }
        }
    }

}

function topShifter() {
    console.log('Shifted Top');
}
function downShifter() {
    console.log('Shifted Down');

}
