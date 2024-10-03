const promise1= new Promise((resolve,reject) => {
    resolve(['javascript','java']);
   // reject("API failed");
});
// promise1
// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// });
//normal function
// async function promise(){
//     const response= await promise1;
//     console.log(response);
// }
// promise();



// async function promise(){
//     const response= await promise1.catch((err) => {
//         console.log(err);
//     });
//     if (response) {
//     console.log(response);
//     }
// }
// promise();


async function promise(){
    try{
        const response= await promise1;
        console.log(response);
        
    }catch(error){
        console.log(error);
    }
}
promise();