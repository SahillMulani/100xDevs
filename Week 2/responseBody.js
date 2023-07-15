const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.json())

function calculateSum(counter)
{   
    var sum = 0;
    for(var i = 0; i < counter ; i++)
    {
        sum += i;
    }

    return sum;

}
function calculateMul(counter)
{   
    var sum = 1;
    for(var i = 1; i < counter ; i++)
    {
        sum *= i;
    }

    return sum;

}
function handleFirstReq(req, res)
{
   console.log(req.body);
   var counter = req.body.counter;
   
    var calulcatedMul = calculateMul(counter);
    var calculatedSum = calculateSum(counter);
    var answerObject = {
        sum : calculatedSum,
        mul : calulcatedMul
    }
    res.status(200).send(answerObject);
}

// app.get('/handleSum', handleFirstReq)
app.post('/handleSum', handleFirstReq)

function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

