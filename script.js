const input = document.getElementById('res'); 
input.value = "";
// var reg = /^-?\d+\.?\d*$/
function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('res').value;
   /*
   if(num1.match(/^[0-9]+$/) == null) {
   	alert("Enter only number as the input!");
   	num
   }
*/   
   var num2 = eval(num1);
   
   if(num2 == Infinity) {
   	alert("Divide By Zero leads to Infinity!");
   }
   document.getElementById('res').value = num2 == Infinity ? "" : num2;
   if(num1 === "" || num2 === "" || num1 == undefined || num2 == undefined) {
   	alert("Enter valid input!");
   	document.getElementById('res').value = "";
   }
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}
