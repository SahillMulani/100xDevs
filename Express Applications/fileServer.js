const path = require('path');
const express = require('express')
const app = express()
const fs = require('fs')
const port = 3000

app.get('/:files', (req, res) => {
    fs.readdirSync(req.params.files).forEach(file =>{
         console.log(file);
    });
  
})
app.get('/:files/:filename', (req, res) => {
    const filepath = path.join(req.params.files,req.params.filename) 
    console.log(filepath);
    
    fs.readFileSync(filepath, 'utf-8', (err,data) => {
        if (err) {
            res.status(404).send("File Not Found");
            return;
          }
          console.log(data);
    })
  
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})