//synchronous

console.log('first print');
console.log('two numbers' + " " + 2+ "," + 4);
console.log('second print');

//Asynchronous

console.log('1');
setTimeout(function(){
    console.log('the program is delayed');
},2000);
console.log('2');
console.log('3');
console.log('4');
console.log('5');
console.log('6');
console.log('7');

console.log("start");
document.getElementById("btn").addEventListener("click",function cb(){
    console.log("callback");
    
});
console.log("end");



