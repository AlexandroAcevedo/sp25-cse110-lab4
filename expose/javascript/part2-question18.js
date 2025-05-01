let intervalId= setInterval(()=>{
    let d= new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}, 1000);

setTimeout(()=>{
    clearInterval(intervalId);
    console.log("Ending Time so computer doesnt die lol")

}, 10000); //10 seconds
