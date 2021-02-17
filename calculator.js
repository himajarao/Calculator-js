console.clear();
console.log('History in console');
//output box
var previousCalci= document.getElementById('previousnumber');
var nextCalci= document.getElementById("nextnumber");
var value= nextCalci.innerHTML;
var previousValue= previousCalci.innerHTML;
//history log
var historyBtn= document.querySelectorAll('button');
var history= document.querySelector('p');
var historyLog= history.innerHTML;
//number variables 
var sev=  document.getElementById('sev');
var eig=  document.getElementById('eig');
var nin=  document.getElementById('nin');
var fou=  document.getElementById('fou');
var fiv=  document.getElementById('fiv');
var six=  document.getElementById('six');
var one=  document.getElementById('one');
var two=  document.getElementById('two');
var thr=  document.getElementById('thr');
var zer=  document.getElementById('zer');
var decimal=  document.getElementById('decimal');
//number variables end
//number addition to output
var updateValue= nextCalci;
sev.addEventListener('click', function(){
  if (value !== null) {
    value = value +'7';
  nextCalci.innerHTML= value;
  }
else {
  value = '7';
  nextCalci.innerHTML= value;
}
});
eig.addEventListener('click', function(){
  if (value !== null) {
    value = value +'8';
  nextCalci.innerHTML= value;
  }
else {
  value = '8';
  nextCalci.innerHTML= value;
}
});
nin.addEventListener('click', function(){
  if (value !== null) {
    value = value +'9';
  nextCalci.innerHTML= value;
  }
else {
  value = '9';
  nextCalci.innerHTML= value;
}
});
fou.addEventListener('click', function(){
  if (value !== null) {
    value = value +'4';
  nextCalci.innerHTML= value;
  }
else {
  value = '4';
  nextCalci.innerHTML= value;
}
});
fiv.addEventListener('click', function(){
  if (value !== null) {
    value = value +'5';
  nextCalci.innerHTML= value;
  }
else {
  value = '5';
  nextCalci.innerHTML= value;
}
});
six.addEventListener('click', function(){
  if (value !== null) {
    value = value +'6';
  nextCalci.innerHTML= value;
  }
else {
  value = '6';
  nextCalci.innerHTML= value;
}
});
one.addEventListener('click', function(){
  if (value !== null) {
    value = value +'1';
  nextCalci.innerHTML= value;
  }
else {
  value = '1';
  nextCalci.innerHTML= value;
}
});
two.addEventListener('click', function(){
  if (value !== null) {
    value = value +'2';
  nextCalci.innerHTML= value;
  }
else {
  value = '2';
  nextCalci.innerHTML= value;
}
});
thr.addEventListener('click', function(){
  if (value !== null) {
    value = value +'3';
  nextCalci.innerHTML= value;
  }
else {
  value = '3';
  nextCalci.innerHTML= value;
}
});
zer.addEventListener('click', function(){
  if (value !== null) {
    value = value +'0';
  nextCalci.innerHTML= value;
  }
else {
  value = '0';
  nextCalci.innerHTML= value;
}
});
decimal.addEventListener('click', function(){
  if (value !== null || value !== '') {
    value.indexOf('.') > -1 ? alert('Oops! You have already entered one decimal.') : value= value + '.';
  nextCalci.innerHTML= value;
  }
else {
  value = '0.';
  nextCalci.innerHTML= value;
}
});
//adding number to value end
//clear variables
var clearAll= document.getElementById('clearall');
var clear= document.getElementById('clear');
//clear variabkes end
clearAll.addEventListener('click', function(){
  previousValue= '';
  value='';
  nextCalci.innerHTML= value;
  previousCalci.innerHTML= previousValue;
})
clear.addEventListener('click', function(){
  value= '';
  nextCalci.innerHTML= value;
})
//sign, percent, eciprocal, square and square root variables
var sign= document.getElementById('sign');
var percent= document.getElementById('percent');
var reciprocal= document.getElementById('reciprocal');
var square= document.getElementById('square');
var cube= document.getElementById('cube')
//end
//functions for plus-minus percent, reciprocal, square and square root

sign.addEventListener('click', function(){
  value= value*-1;
  nextCalci.innerHTML= value;
})
percent.addEventListener('click', function(){
  console.log(value+ '%' +'='+ value*0.01);
  value= value*0.01;
  nextCalci.innerHTML= value;
})
reciprocal.addEventListener('click', function(){
  console.log('1/'+value +'='+ 1/value);
  value= 1/value;
  nextCalci.innerHTML= value;
})
square.addEventListener('click', function(){
  console.log(value+'^2'+'='+ value*value);
  value= value*value;
  nextCalci.innerHTML= value;
})
cube.addEventListener('click', function(){
  value= value*value*value;
  nextCalci.innerHTML= value;
})
//end
//operations + - * / variables
var add= document.getElementById('add');
var sub= document.getElementById('sub');
var multiply= document.getElementById('multiply');
var divide= document.getElementById('divide');
//end
//functions for operation
add.addEventListener('click', function(){
    previousValue = value + '+';
  previousCalci.innerHTML= previousValue;
    value= '';
    nextCalci.innerHTML= value;
});
sub.addEventListener('click', function(){
    previousValue = value + '-';
  previousCalci.innerHTML= previousValue;
    value= '';
    nextCalci.innerHTML= value;
});
multiply.addEventListener('click', function(){
    previousValue = value + '*';
  previousCalci.innerHTML= previousValue;
    value= '';
    nextCalci.innerHTML= value;
});
divide.addEventListener('click', function(){
    previousValue = value + '/';
  previousCalci.innerHTML= previousValue;
    value= '';
    nextCalci.innerHTML= value;
});
//equals
var equal= document.getElementById('equal');
var result
//equals function 
equal.addEventListener('click', function(){
  value= previousValue + value;
  console.log(value+ '='+ eval(value));
  value= eval(value);
  nextCalci.innerHTML= value;
  previousValue= '';
  previousCalci.innerHTML= previousValue;
})
//history log
//historyBtn.addEventListener('click', function(){
  //history.classList.toggle('show');
 // history.style.display= block;
//})
