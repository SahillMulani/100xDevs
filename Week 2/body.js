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

function handleFirstReq(req, res)
{
   console.log(req.body);
   var counter = req.body.counter;
  
    var calculatedSum = calculateSum(counter);
    res.send('The sum is '+ calculatedSum)
}

 app.get('/handleSum', handleFirstReq)
// app.post('/handleSum', handleFirstReq)

function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



