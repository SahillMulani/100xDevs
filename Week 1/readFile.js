const fs = require('fs');

function readFile()
{
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });

}
function add(n) 
{
    count = 0;
    for( var i = 0 ; i < n; i++)
    {
        count += i ;
    } 
    console.log(count);
}

setTimeout( readFile, 1000);
add(10000);
console.log("Hello World");
add(10000000);