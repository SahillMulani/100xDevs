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

function givePage(req, res)
{
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello From Page</title>
        </head>
        <body>
            <b>hi there</b>
        </body>
        </html>`)
}

app.get('/', givePage)
// app.get('/handleSum', handleFirstReq)
app.post('/handleSum', handleFirstReq)



function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



