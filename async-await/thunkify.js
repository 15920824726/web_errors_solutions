var fs = require('fs');

try {
    const test = fs.readFile('read.txt', 'utf8' ,'utf8');
    console.log(test);
    const data = fs.readFileSync('read.txt', 'utf8');
    console.log(data);
    const data1 = fs.readFileSync('package.json', 'utf8');
    console.log(data1);
} catch (err) {
    console.log(err)
}