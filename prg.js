function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedTask(message, ms) {
    await delay(ms);
    console.log(message);
}

delayedTask("Hello after 2 seconds", 2000); // Logs "Hello after 2 seconds" after 2 seconds
