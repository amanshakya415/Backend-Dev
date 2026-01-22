// Q1 Create a Node.js program that reads a text file, counts the number of words, and writes the
//count to a new file.

const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const words = data.length;

    fs.writeFile('ab.txt', `Word Count: ${words}`, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Word count written to output.txt');
    });
});
