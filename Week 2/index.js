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
    var calculatedSum = calculateSum(100);
    res.send('The sum is '+ calculatedSum)
}

app.get('/handleSum', handleFirstReq)

function started()
{
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)



