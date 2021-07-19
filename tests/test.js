var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var button5 = document.querySelector(".button5");

var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");
var content3 = document.querySelector(".content3");
var content4 = document.querySelector(".content4");
var content5 = document.querySelector(".content5");

button1.addEventListener('click', displayContent1);
button2.addEventListener('click', displayContent2);
button3.addEventListener('click', displayContent3);
button4.addEventListener('click', displayContent4);
button5.addEventListener('click', displayContent5);

function displayContent1(){
    content1.classList.toggle('clicked');
}

function displayContent2(){
    content2.classList.toggle('clicked');
}

function displayContent3(){
    content3.classList.toggle('clicked');
}

function displayContent4(){
    content4.classList.toggle('clicked');
}
function displayContent5(){
    content5.classList.toggle('clicked');
}


