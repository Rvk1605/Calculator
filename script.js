var display=document.getElementById('display');

let s="";
var zero=document.getElementById('zero');
zero.addEventListener('click',function(){
    display.innerText='0';
    s=s+'0';
});

var one=document.getElementById('one');
one.addEventListener('click',function(){
    display.innerText='1';
    s=s+'1';
});

var two=document.getElementById('two');
two.addEventListener('click',function(){
    display.innerText='2';
    s=s+'2';
});

var three=document.getElementById('three');
three.addEventListener('click',function(){
    display.innerText='3';
    s=s+'3';
});

var four=document.getElementById('four');
four.addEventListener('click',function(){
    display.innerText='4';
    s=s+'4';
});

var five=document.getElementById('five');
five.addEventListener('click',function(){
    display.innerText='5';
    s=s+'5';
});

var six=document.getElementById('six');
six.addEventListener('click',function(){
    display.innerText='6';
    s=s+'6';
});

var seven=document.getElementById('seven');
seven.addEventListener('click',function(){
    display.innerText='7';
    s=s+'7';
});

var eight=document.getElementById('eight');
eight.addEventListener('click',function(){
    display.innerText='8';
    s=s+'8';
});

var nine=document.getElementById('nine');
nine.addEventListener('click',function(){
    display.innerText='9';
    s=s+'9';
});

var plus=document.getElementById('plus');
plus.addEventListener('click',function(){
    s=s+'+';
});

var minus=document.getElementById('minus');
minus.addEventListener('click',function(){
    s=s+'-';
});

var multiply=document.getElementById('multiply');
multiply.addEventListener('click',function(){
    s=s+'*';
});

var divide=document.getElementById('divide');
divide.addEventListener('click',function(){
    s=s+'/';
});

var modulo=document.getElementById('modulo');
modulo.addEventListener('click',function(){
    s=s+'%';
});


var ac=document.getElementById('ac');
ac.addEventListener('click',function(){
    display.innerText='';
    s="";
});

var equal=document.getElementById('equal');
equal.addEventListener('click',function(){
    var val=eval(s);
    s=String(val);
    display.innerText=val;
});

// dot operator and sign Not Done