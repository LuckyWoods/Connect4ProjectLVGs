/*let counterAmount = document.querySelector("#counterAmount");
let counterDone = document.querySelector("#counterDone");*/
/*let counterList = 0;
let counterDoneList = 0;*/


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
let boardPiece = [ ['▩', '▩', '▩', '▩', '▩', '▩', '▩'], 
    ['▩', '▩', '▩', '▩', '▩', '▩', '▩'],
    ['▩', '▩', '▩', '▩', '▩', '▩', '▩'],
    ['▩', '▩', '▩', '▩', '▩', '▩', '▩'],
    ['▩', '▩', '▩', '▩', '▩', '▩', '▩'],
    ['▩', '▩', '▩', '▩', '▩', '▩', '▩']
]




function displayList(){
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
            }
            for(let j = 0; j < 7; j++) {
                //let li= myList[lli];
                //console.log(li.name);
                
                if(i == -1){
                    h += '<button onclick="changeItem(' + j + ')">X</button>';
                }
                else{
                    if(numbers[i][j] == 1){
                    //Make as a flag
                        h += '<span = "lisChild">' 
                        + '<img src="../images/Red.png">' + " " 
                        + '</span>';
                    }
                    else if(numbers[i][j ] == 2){
                        //Make as a flag
                            h += '<span = "lisChild">' 
                            + '<img src="../images/Orange.png">' + " " 
                            + '</span>';
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
            /*h += '<div class = "lisChild">' 
            +'◼' + " " 
            + '◼' + " "
            + '◼' + " "
            + '◼' + " "
            + '◼' + " "
            + '◼' + " "
            + '◼' + " "
            + '◼'
            + '</div>';*/
            
        }
        countLoop = 0;
        //h += '<ul>';
        div.innerHTML =  h;
    console.log("Here is the html: ", h)
}

let myLine = [[5], [5], [5], [5], [5], [5], [5]];

let numbers = [ [0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0] ];

let changeColor = 1;

function changeItem(let){
    if(myLine[let] >= 0 && changeColor == 1){
        let numb = myLine[let];
        numbers[numb][let] = 1;
        boardPiece[numb][let] = '▨'; 
        changeColor = 2;
        myLine[let]--;
    }

    else if(myLine[let] >= 0 && changeColor == 2){
        let numb = myLine[let];
        numbers[numb][let] = 2;
        boardPiece[numb][let] = '▧'; 
        changeColor = 1;
        myLine[let]--;
    }

    //}
    displayList();
}

function myFunction(let) {
    
    
    
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
}

//this.document.onload = load();
