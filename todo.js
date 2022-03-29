/*let counterAmount = document.querySelector("#counterAmount");
let counterDone = document.querySelector("#counterDone");*/
/*let counterList = 0;
let counterDoneList = 0;*/
let colorTurn = document.querySelector("#colorTurn");


// TEST FIXME

let myList = [

];

function addItem(){
    myList.push({name:n});
    //AddCount();
    save();
    displayList();
    myList.reduce
}

/*function AddCount(){
    counterList++;
    counterAmount.innerText = counterList;
}

function AddDonCount(){
    counterDoneList++;
    counterDone.innerText = counterDoneList;
}

function SubCount(){
    counterList--;
    counterAmount.innerText = counterList;
}

function SubDonCount(){
    counterDoneList--;
    counterDone.innerText = counterDoneList;
}*/

/*var delCheck = false;
function deleteAlert(){
    if(confirm("Are you sure you want to delete this?")){
        delCheck = true;
    }
    else{
        delCheck = false;
    }
  }
*/

/*
function deleteItem(let){
    deleteAlert();
    if(delCheck == true){
        if(let >-1){
            if(myList[let].done){
                SubDonCount();
            }
            myList.splice(let, 1);
            SubCount();
            save();
        }

        displayList();
    }
}
*/

/*
function deleteList(){
    myList.splice(0, myList.length);
    counterList = 0;
    counterDoneList = 0;
    counterAmount.innerText = counterList;
    counterDone.innerText = counterDoneList;
    save();
    displayList();
}
*/

/*
function save(){
    setData(DB_PATH + DEFAULT_TODO, myList);
}

var flag = false;

function load() {
    if (!flag) {
        flag = true;
        watchData(DB_PATH + DEFAULT_TODO, data => {
            if (date != null){
                myList = data;
            }
            
            counterList = myList.length;
            counterAmount.innerText = counterList;
            let counterCheck = 0;
            for(let lli in myList) {
                if(myList[lli].done){
                    counterCheck++;
                }
            }
            //counterDoneList = counterCheck;
            //counterDone.innerText = counterDoneList;
            displayList();
        });
    }

}
*/


let board = [ [1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], 
[15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31, 32, 33, 34, 35], [26, 37, 38, 39, 40, 41, 42] ]
let boardPiece = [     ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"], 
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"]
]

let vicCheckRow = 0;
let vicCheckCol = 0;
let vicCheckHei = 0;
let redVic1 = 0;
let oranVic1 = 0;
let redVic2 = 0;
let oranVic2 = 0;
let upDate = 0;
let win = 0;

function checkRow(){
    if(vicCheckCol < 7){
        upDate = vicCheckCol + 1;
        if (boardPiece[vicCheckRow][vicCheckCol] == boardPiece[vicCheckRow][upDate]){
            if(boardPiece[vicCheckRow][vicCheckCol] == "Red"){
                redVic1++;
                if(redVic1 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[vicCheckRow][vicCheckCol] == "Orange"){
                oranVic1++;
                if(oranVic1 == 3){
                    win = 2;
                }
            }
        }

        else{
            upDate = 0;
            redVic1 = 0;
            oranVic1 = 0;
            return;
        }
    }

    else{
        return;
    }
}

function checkHeight(let){
    for(let j = 0; j < 5; j++){
        upDate = j + 1;
        if(boardPiece[j][let] == boardPiece[upDate][let]){
            if(boardPiece[j][let] == "Red"){
                redVic2++;
                if(redVic2 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[j][let] == "Orange"){
                oranVic2++;
                if(oranVic2 == 3){
                    win = 2;
                }
            }
        }
        else{
            upDate = 0;
            redVic2 = 0;
            oranVic2 = 0;
        }
    }

    /*if(upDate < 6){
        if (boardPiece[vicCheckHei][let] == boardPiece[upDate][let]){
            if(boardPiece[vicCheckHei][let] == "Red"){
                redVic2++;
                if(redVic2 == 3){
                    win = 1;
                }
            }
            else if(boardPiece[vicCheckHei][let] == "Orange"){
                oranVic2++;
                if(oranVic2 == 3){
                    win = 2;
                }
            }
        }

        else{
            upDate = 0;
            redVic2 = 0;
            oranVic2 = 0;
            return;
        }
    }*/

    /*else{
        return;
    }*/
}

function displayList(){
    /*h += '<div id="myCounter1">' +
            '<h1 id="counterAmount"> Red Turn</h1>' +
    '</div>';*/
    let div = document.getElementById('mydiv');
    let h = '';
    //h = '<ul>\r\n';
    let countLoop = 1;
    //console.log(myList);

    for(let i = -1; i < 6; i++) {
        if(i == -1){
            h += '<div = "buttonDiv">';
        }
        else{
            h += '<div = "lisDiv">';
            vicCheckRow = i;
        }

        for(let j = 0; j < 7; j++) {
                //let li= myList[lli];
                //console.log(li.name);
            if(i == -1){
                h += '<button onclick="changeItem(' + j + ')">X</button>';
            }

            else{
                vicCheckCol = j;
                if(boardPiece[i][j] == "Red"){
                //Make as a flag
                    h += '<span = "lisChild">' 
                    + '<img src="../images/Red.png">' + " " 
                    + '</span>';
                    checkRow();
                }

                else if(boardPiece[i][j] == "Orange"){
                    //Make as a flag
                    h += '<span = "lisChild">' 
                    + '<img src="../images/Orange.png">' + " " 
                    + '</span>';
                    checkRow();
                }

                else{
                    h += '<span = "lisChild">' 
                    +  '<img src="../images/Black.png" >' + " "
                    + '</span>';
                }
                countLoop++;
            }
        }
        h += '</div>\r\n';
            
    }
    countLoop = 0;
    //h += '<ul>';
    div.innerHTML =  h;
    vicCheckCol = 0;
    vicCheckRow = 0;
    for(let i = 0; i < 7; i++){
        checkHeight(i);
    }
    console.log("Here is the html: ", h)
}

let myLine = [[5], [5], [5], [5], [5], [5], [5]];
let changeColor = 1;

function changeItem(let){
    if(myLine[let] >= 0 && changeColor == 1){
        let numb = myLine[let];
        //numbers[numb][let] = 1;
        boardPiece[numb][let] = "Red"; 
        changeColor = 2;
        colorTurn.innerText = "Orange Turn";
        myLine[let]--;
    }

    else if(myLine[let] >= 0 && changeColor == 2){
        let numb = myLine[let];
        //numbers[numb][let] = 2;
        boardPiece[numb][let] = "Orange"; 
        changeColor = 1;
        colorTurn.innerText = "Red Turn";
        myLine[let]--;
    }

    //}
    displayList();
    if(win == 1){
        gameOverAlertRed();
    }
    else if(win == 2){
        gameOverAlertOrange();
    }

}

function gameOverAlertRed(){
    setTimeout(() => {
        if(confirm("Red Wins!!!")){
            win = 0;
            reStart();
        }
        else{
        }
    }, 1000);

}

function gameOverAlertOrange(){
    setTimeout(() => {
        if(confirm("Orange Wins!!!")){
            win = 0;
            reStart();
        }
        else{
        }
    }, 1000);
}

function reStart(){
    /*for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 7; j++) {
            boardPiece[i][j] = "Blank"; 
        }
    }*/
    boardPiece = [     ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"], 
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"],
    ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"]];
    myLine = [[5], [5], [5], [5], [5], [5], [5]];


    changeColor = 1;
    colorTurn.innerText = "Red Turn";
    displayList();

}


/*function myFunction(let) {
    
    
    
    checkbox = document.getElementById("myCheck(" + let + ")");
    if(checkbox.checked == true){
        counterDoneList++;
        counterDone.innerText = counterDoneList;
        myList[let].done = true;
        save();
    }

    else{
        counterDoneList--;
        counterDone.innerText = counterDoneList;
        myList[let].done = false;
        save();
    }

    displayList();
}*/

//this.document.onload = load();
