var counter = 0;
function counterAdd()
{
    console.clear();
    counter += 1;
    console.log(counter);
    setTimeout( counterAdd, 1000);

}

counterAdd();