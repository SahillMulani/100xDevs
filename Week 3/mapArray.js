
function mapArray(array, callbackF)
{
    for( var i = 0; i < array.length ; i++)
    {
        array[i] = callbackF(array[i]);
    }

}

function callbackF(value)
{
    value += 1;
    return value;
}

let arrayy = [1,2,3,4,5,6,7,8,9];

mapArray(arrayy, callbackF);
console.log(arrayy);