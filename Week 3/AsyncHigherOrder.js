const date = new Date()

let day = date.getDate()

function higherOrder(day, callbackF) 
{
    setTimeout(callbackF, day * 500);
    console.log("Here we gooo");
}

function callbackF()
{
    console.log("Hello World");
}

higherOrder(day, callbackF);