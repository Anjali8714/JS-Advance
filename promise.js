//promise creation (resolve,reject)

// let promise = new Promise(function(resolve,reject){
//     let success=false;
//     if(success){
//         resolve("Operation successfully");
//     }else{
//         reject("Operation failed");
//     }
// });
// promise
// .then(function(result){
//     console.log(result);
// })
// .catch(function(error){
//     console.log(error);
// });

//promise example


// let fetchdata= new Promise(function(a,b){
//     setTimeout(function(){
//         let success=false;
//         if(success){
//             a("Data fetched successfuly");
//         }else{
//             b("Data fetched failed");
//         }
//     },2000);
// });
// fetchdata
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// });

// adding element another example


// function getdatafromAPI(num){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(num);
//         },2000);
//     });
// }
// function getdatafromAPI1(num){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(num);
//         },2000);
//     });
// }
// getdatafromAPI(5)
// .then((result)=>{
// return getdatafromAPI1(result+5);
// })
// .then((result) => {
//     console.log(result); 
// });

//promise.all()


// let promise= new Promise((resolve,reject) => {
//     resolve(['javascript','java']);
// });
// let promise1=new Promise((resolve,reject) => {
//     resolve(['HTML','css']);
// });
// let promise2=new Promise((resolve,reject) => {
//     resolve(['react','angular']);
// });
// let allpromise=Promise.all([promise,promise1,promise2])
// allpromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

//promise.allsettled()

// let promise= new Promise((resolve,reject) => {
//     resolve(['javascript','java']);
// });
// let promise1=new Promise((resolve,reject) => {
//     reject(['HTML','css']);
// });
// let promise2=new Promise((resolve,reject) => {
//     resolve(['react','angular']);
// });
// let allsettledpromise=Promise.allSettled([promise,promise1,promise2])
// allsettledpromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

//promise.any()

// let promise= new Promise((resolve,reject) => {
//     resolve(['javascript','java']);
// });
// let promise1=new Promise((resolve,reject) => {
//     reject(['HTML','css']);
// });
// let promise2=new Promise((resolve,reject) => {
//     resolve(['react','angular']);
// });
// let anypromise=Promise.any([promise,promise1,promise2])
// anypromise
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


//promise.race()

let promise= new Promise((resolve,reject) => {
    reject(['javascript','java']);
});
let promise1=new Promise((resolve,reject) => {
    resolve(['HTML','css']);
});
let promise2=new Promise((resolve,reject) => {
    resolve(['react','angular']);
});
let allpromise=Promise.race([promise,promise1,promise2])
allpromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});