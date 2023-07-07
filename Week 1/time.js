/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

const d = new Date();
let time =  d.getTime();

function calculateTime(n) 
{
    count = 0;
    for( var i = 0 ; i < n; i++)
    {
        count += i ;
    } 
    console.log(count);
}
calculateTime(1000000000);
let time2 = d.getTime();

console.log(time2 - time);
