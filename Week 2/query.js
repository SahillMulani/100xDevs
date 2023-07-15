const express = require('express')
const app = express()
const port = 3000

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
    // Via Query Parameter
   var counter = req.query.counter;
  // var counter = req.headers.counter;
  
    var calculatedSum = calculateSum(counter);
    var answer = {
        sum : calculatedSum
    }
    res.send(answer);
}

app.get('/handleSum', handleFirstReq)
// app.post('/handleSum', handleFirstReq)

function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



