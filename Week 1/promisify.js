/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function printThen()
{
    console.log("Oh yeah");
}


function wait(n) {
    var answer = new Promise( (resolve) => {
        setTimeout(resolve, n);

    });

    return answer;
}

var wai = new wait();
wai.then(printThen);
console.log("Put jat da");