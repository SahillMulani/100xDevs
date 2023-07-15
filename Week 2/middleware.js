const express = require('express')
const app = express()
const port = 3000

function middleware(req, res, next)
{
    console.log("from inside "+ req.headers.counter);
    res.send("Error from inside the middleware");
//    next(); // after this function is called the request will go to the function
}

app.use(middleware);

function calculateSum(counter)
{   
    var sum = 0;
    for(var i = 0; i < counter ; i++)
    {
        sum += i;
    }

    return sum;

}

function handleFirstReq(req, res)
{
    // Via Header
    console.log(req.headers);
    // Via Query Parameter
   // var counter = req.query.counter;
   var counter = req.headers.counter;
  
    var calculatedSum = calculateSum(counter);
    res.send('The sum is '+ calculatedSum)
}

// app.get('/handleSum', handleFirstReq)
app.post('/handleSum', handleFirstReq)

function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



