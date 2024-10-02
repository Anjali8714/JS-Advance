// function display(s){
// console.log(s);
// }
// function add(a,b){
//     sum=a+b;
//    return sum 
// }
// result=add(2,3);
// display(result);

// function attachEventListener(){
//     count=0;
//     document.getElementById("cm")
//     .addEventListener("click",function note(){
//         console.log("Button clicked",++count); 
//     });
// }
// attachEventListener()

// function sum(callback,x,y){
//     let result=x+y;
//     callback(result);
// }
// function display(result){
//     console.log(result);
    
// }
// sum(display,4,5);

// function fetchData(callback){
// console.log("Fetching data");
// setTimeout(function(){
//     callback()
// },2000);

// }
// function successfully(){
//     console.log("Data fetched successfully");
    
// }
// fetchData(successfully);



// function processNumbers(numbers, callback) {
//     numbers.forEach(function(number) {
//         console.log(callback(number));
//     });
// }

// function square(num) {
//     return num * num;
// }

// processNumbers([1, 2, 3, 4],square);


// function loadPage(callback){
//     console.log("loading a webpage");
//     setTimeout(function(){
//         callback()
//     },3000);
// }
// function pageload(){
//     console.log("Page loaded");
    
// }
// loadPage(pageload);


// function sum(callback,x,y){
//     result=x+y;
//     callback(result);
// }
// function displayconsole(result){
// console.log(result);
// }
// function displaypage(result){
//     document.getElementById("Myh1").textContent=result;
// }
// sum(displaypage,4,6);

// function Mydata(callback,name){
//     console.log("My name is " + name);
//     setTimeout(function(){
//         callback();
//     },2000);
    
// }
// function Myageandeducation(){
//     console.log("I am 20 years old");
//     console.log("Graduated in BCA");
// }
// Mydata(Myageandeducation,"Anjali");

// console.log("Start");
// function getDataFromAPI(){
//     setTimeout ( () =>  "Hello world"
//      ,2000);
// }
// console.log(getDataFromAPI());


// console.log("End");

// console.log("Start");
// function getDataFromAPI(){
//     setTimeout ( () =>console.log( "Hello world")
//      ,2000);
// }
// getDataFromAPI();


// console.log("End");

console.log("Start");
function getDataFromAPI(callback){
    setTimeout ( () =>callback(5)
     ,2000);
}
function getDataFromAPI2(callback){
    setTimeout ( () =>callback(4)
     ,2000);
}

function getDataFromAPI3(callback){
    setTimeout ( () =>callback(3)
     ,2000);
}

getDataFromAPI((value)=>getDataFromAPI2((apival2)=>getDataFromAPI3((apival3)=>console.log(apival3+apival2+value))));

console.log("End");