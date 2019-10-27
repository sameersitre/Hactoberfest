var problemString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

var num = [];
var temp = 0;
var row = [];
var column = [];
var box = [];

//to convert string into nos num[] and swipe -(hipen) to 0
// for (var i = 0; i < problemString.length; i++) {
//     if (problemString.charAt(i) != "-")
//         num[i] = problemString.charAt(i);
//     else
//         num[i] = 0;
// }


creatinginRowArrayColumnArrayBoxArray();
function creatinginRowArrayColumnArrayBoxArray() {

    //CREATE ROWS: to slice the num[] into 9 parts and put the parts in row[] // and display the game in UI
    for (var j = 0; j < 9; j++) {
        row[j] = problemString.slice(temp, temp + 9)
        temp = temp + 9;
    }

    //CREATE Columns: 
        //FIRST TRANSPOSE THE WHOLE ROW ARRAY
        //THEN ADD EACH TRANSPOSED ROW IN COLUMN

    // CREATE BOX;
    var j=0;
    for(var i=0; i<23; i++){

        box.push(problemString[j])
        j++;
    }
}

console.log(column[0])
for (var i = 0; i < 9; i++) {
    console.log(row[i]);
}
console.log("Column " + column[0]);
console.log("row: " + row[1]);// = num.slice(temp,temp+9)
console.log("element in row(0,0): " + row[2][0]);

// SEARCHING ELEMENT IN BOX, COLUMN, ROW
function searchElementinBoxColumnRow() {
    for (var i = 0; i < 9; i++) {
        if (verifyinRow(element) != true && verifyinColumn(element) != true && verifyinBox(element) != true) {
            //
        }
    }

}



verifyinRow("8")
function verifyinRow(varname) {
    for (i = 0; i < 9; i++) {
        if (row[0][i] == varname) {
            console.log("varname is in row1")
            return false
        }
        else return true


    }
}

function verifyinColumn(element) {
    for (i = 0; i < 9; i++) {

    }

}
function verifyinBox() {

}
