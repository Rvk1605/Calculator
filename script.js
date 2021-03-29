var display=document.getElementById('display');

let s="";
var zero=document.getElementById('zero');
zero.addEventListener('click',function(){
    s=s+'0';
    display.innerText=s;
});

var one=document.getElementById('one');
one.addEventListener('click',function(){
    s=s+'1';
    display.innerText=s;
});

var two=document.getElementById('two');
two.addEventListener('click',function(){
    s=s+'2';
    display.innerText=s;
});

var three=document.getElementById('three');
three.addEventListener('click',function(){
    s=s+'3';
    display.innerText=s;
});

var four=document.getElementById('four');
four.addEventListener('click',function(){
    s=s+'4';
    display.innerText=s;
});

var five=document.getElementById('five');
five.addEventListener('click',function(){
    s=s+'5';
    display.innerText=s;
});

var six=document.getElementById('six');
six.addEventListener('click',function(){
    s=s+'6';
    display.innerText=s;
});

var seven=document.getElementById('seven');
seven.addEventListener('click',function(){
    s=s+'7';
    display.innerText=s;
});

var eight=document.getElementById('eight');
eight.addEventListener('click',function(){
    s=s+'8';
    display.innerText=s;
});

var nine=document.getElementById('nine');
nine.addEventListener('click',function(){
    s=s+'9';
    display.innerText=s;
});

var plus=document.getElementById('plus');
plus.addEventListener('click',function(){
    s=s+'+';
    display.innerText=s;
});

var minus=document.getElementById('minus');
minus.addEventListener('click',function(){
    s=s+'-';
    display.innerText=s;
});

var multiply=document.getElementById('multiply');
multiply.addEventListener('click',function(){
    s=s+'*';
    display.innerText=s;
});

var divide=document.getElementById('divide');
divide.addEventListener('click',function(){
    s=s+'/';
    display.innerText=s;
});

var modulo=document.getElementById('modulo');
modulo.addEventListener('click',function(){
    s=s+'%';
    display.innerText=s;
});

var dot=document.getElementById('dot');
dot.addEventListener('click',function(){
    s=s+'.';
    display.innerText=s;
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
