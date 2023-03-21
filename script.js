var count1 = 9;
var count2 = 12;
var count3 = 9;


function addCount1(){
    var countElement = document.querySelector("#like1");
    count1++;
    countElement.innerText = count1;
}


function addCount2(){
    var countElement = document.querySelector("#like2");
    count2++;
    countElement.innerText = count2;
}

function addCount3(){
    var countElement = document.querySelector("#like3");
    count3++;
    countElement.innerText = count3;
}