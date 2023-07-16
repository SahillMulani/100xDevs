const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

let users = [ ];

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

// let middleware = (req, res, next) =>
// {
//     var id = findIndex(users, parseInt(req.params.id))
//     if( req.body.username == users[id].username && req.body.password == users[id].password)
//     {
//         next();
//     }
//     else
//     {
//         res.status(403).send("Invalid Credentials");
//     }


// }

// app.use('/:id', middleware)

app.get('/', (req, res) => {
    res.send('Welcome!!!')
  })

app.post('/signup', (req,res) => {

    let user = {
        id : Math.floor(Math.random() * 1000),
        username : req.body.username,
        password : req.body.password
    }
    users.push(user);
    res.status(201).json(users).send('User Created')
})

app.get('/login/:id', (req,res) => {

    var id = findIndex(users, parseInt(req.params.id))
    console.log(id);
    if (id === -1)
    {
        res.status(404).send();
    }
    else
    {
        console.log(users[id].username === req.body.username);
        console.log(users[id].password === req.body.password);
        if ( users[id].username === req.body.username && users[id].password === req.body.password)
        {
            res.status(200).send('You are logged in');
        }
        else
        {
            res.status(404).send('Wrong Credentials');
        }
    }
  })

app.get('/:id', (req,res) => {
    var id = findIndex(users, parseInt(req.params.id));
    if ( users[id].username === req.body.username && users[id].password === req.body.password)
    {
        res.status(200).json(users[id]);
    }
    else
    {
        res.status(404).send('Wrong Credentials');
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})