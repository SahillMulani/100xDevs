const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000

app.use(bodyParser.json())

let findIndex = (arr, id) => {
    console.log(id);
    for( var i = 0; i < arr.length ; i++)
    {
        if(arr[i].id === id)
        {
            return i;
        }
    }
    return -1;
}

let todo = [];



app.get('/:id', (req, res) => {
    var id = findIndex(todo, parseInt(req.params.id))
    if (id === -1)
    {
        res.status(404).send();
    }
    else
    {
        res.json(todo[id]);
    }
  })

app.post('/todo', (req,res) =>
{
    let one = {
        id : Math.floor(Math.random() * 10000),
        title : req.body.title,
        description : req.body.description
    }
    todo.push(one);
    res.status(201).json(todo);
})

app.put('/todo/:id', (req, res) =>
{
    var id = findIndex(todo, parseInt(req.params.id));
    todo[id].title = req.body.title;
    todo[id].description = req.body.description;

    res.json(todo[id]);

})

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})