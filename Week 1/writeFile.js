
const { error } = require('console');
const fs = require('fs');

console.time("dbsave");


const content = 'Some content';

function writeFile()
{
    fs.writeFileSync('test.txt', content, err => {
        if (err)
        {
            console.error(err)
        }
    });
    console.log("DOne writing the file");
}
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
// setTimeout(writeFile, 1000);
// setTimeout(readFile, 2000);
writeFile();
readFile();

console.timeEnd("dbsave");
console.log("After uou");
