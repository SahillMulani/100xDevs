var counter = 0;
function counterAdd()
{
    console.clear();
    counter += 1;
    console.log(counter);
}

setInterval( counterAdd, 1000);