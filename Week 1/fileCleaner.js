// Reading File

const { error } = require('console');
const fs = require('fs');

let str = '';
function readFile()
{
    const data = fs.readFileSync('test.txt',
    { encoding: 'utf8', flag: 'r' });
 
// Display the file data
    str = data;
  
}
function writeFile(str1)
{
    fs.writeFileSync('test.txt', str1, err => {
        if (err)
        {
            console.error(err)
        }
    });
    console.log("DOne writing the file");
}

readFile();
str1 = str.replace(/\s+/g, ' ');
console.log(str1);
writeFile(str1)