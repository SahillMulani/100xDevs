function higherOrder(callbackFunc)
{
    
    callbackFunc();
    console.log("Called higher order function");

}

function callbackFunc()
{
    console.log("Hello World");
}


higherOrder(callbackFunc);