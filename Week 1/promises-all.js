/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(resolve) 
{
    setTimeout(resolve, 1000);

}

function waitTwoSecond(resolve) 
{
    setTimeout(resolve, 2000);

}

function waitThreeSecond(resolve) 
{
    setTimeout(resolve, 3000)

}

function calculateTime() 
{
    var onesec = new Promise(waitOneSecond);
    var twosec = new Promise(waitTwoSecond);
    var threesec = new Promise(waitThreeSecond);

    return onesec, twosec, threesec;

}

function printHello()
{
    console.log("Hello");
}

let a , b , c = new calculateTime();

a.then(printHello);
b.then(printHello);
c.then(printHello);