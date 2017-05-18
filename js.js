var rotate=document.querySelector('#rotate');
var counter=1;
var x1=0,x2=0;
for (var i=1; i<70; i++) {
var imgN = document.createElement('img');
var timerOn;
imgN.className= 'img-n none-img';
imgN.id=i;
imgN.src='images/'+i+'.jpg';
rotate.appendChild(imgN);
document.getElementById(1).classList.remove('none-img');
};
rotate.appendChild(imgN);
var polzunokRotate = document.createElement('input');
polzunokRotate.id='rotate-polzunok';
polzunokRotate.min='1';
polzunokRotate.max='69';
polzunokRotate.value='1';
polzunokRotate.type='range';
document.querySelector('body').appendChild(polzunokRotate);



function mooving(event) {
    x=x1;
    x1=event.offsetX;
    document.getElementById(counter).classList.add('none-img');
    if (x2<x1) {
        moovingLeft();
    }
    else if (x2>x1) {
        moovingRight();
    }
    document.getElementById(counter).classList.remove('none-img');
}

function polzunok() {
    document.getElementById(counter).classList.add('none-img');
    counter=polzunokRotate.value;
    document.getElementById(counter).classList.remove('none-img');

}
function moovingRight() {
    if (counter<68) {
        counter++;
    }else {
        counter =1;
    }
}
function moovingLeft() {
    if (counter>1) {
        counter--;
    } else {
        counter=69;
    }
}
function polzunokTimer() {
    document.getElementById(counter).classList.add('none-img');
    moovingRight();
    polzunokRotate.value = counter;
    document.getElementById(counter).classList.remove('none-img');
    timerOn=setTimeout(polzunokTimer,300);
}
function timerOff() {
    clearTimeout(timerOn,300);
}

rotate.addEventListener('mousemove',mooving);
polzunokRotate.addEventListener('input',polzunok);
document.querySelector('#stop').addEventListener('click',timerOff);
document.querySelector('#run').addEventListener('click',polzunokTimer);

