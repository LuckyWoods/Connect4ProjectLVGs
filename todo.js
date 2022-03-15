/*let counterAmount = document.querySelector("#counterAmount");
let counterDone = document.querySelector("#counterDone");*/
/*let counterList = 0;
let counterDoneList = 0;*/

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

let numbers = 0; 
let board = [ [1, 2, 3, 4, 5, 6], ]

function displayList(){
    let div = document.getElementById('mydiv');
    let h = '';
    //h = '<ul>\r\n';
        let countLoop = 1;
        //console.log(myList);
        h += '<button onclick="deleteItem(' 
        + 0 + ')">X</button>' 
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>' 
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>'
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>'
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>'
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>'
        + '<button onclick="deleteItem(' 
        + 0 + ')">X</button>';

        for(let i = 0; i < 6; i++) {
            for(let j = 0; j < 6; j++) {
                //let li= myList[lli];
                //console.log(li.name);
                if(numbers == 1){
                //Make as a flag
                    h += '<li>'+ '<div class = "lisChild">' 
                    + countLoop + ". " 
                    + '</div>' + '</li>\r\n';
                }
                else{
                    h += '<span>'+ '<div class = "lisChild">' 
                    + '◼'
                    + '</div>' + '</span>';

                }
                countLoop++;
            }
            
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
