console.log("start");
setTimeout(function cbt(){
    console.log("SetTimeOut");
    
},5000);
fetch("https://api.netflix.com").then(function cbf(){
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
console.log("Netflix");
})
 .catch(function handleError(error) {  
    console.error("Fetch failed:", error.message);

});
console.log("end");

