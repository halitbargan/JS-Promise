console.log('» index.js is running');

function wait(ms) {
    const start = new Date().getTime();
    let end = start;
    while (end < start < ms) {
        end = new Date().getTime();
    }
}

// *******************************PROMISES***********************
const promise = new Promise((resolve, reject)=> {
    //request -> req
    //response -> res
    //some calculation
    wait(2000);
    const userData = {
        firstname: "Barry",
        birthyear: 1977
    };
    let succesfull = Math.floor(Math.random() * 5);
    if(succesfull) resolve("Successfully settled");
    reject("Something went wrong!")
});