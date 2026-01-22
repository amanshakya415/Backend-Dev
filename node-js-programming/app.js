const fs = require('fs');

fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Count words
    const words = data.length;

    // Write the result to output file
    fs.writeFile('ab.txt', `Word Count: ${words}`, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Word count written to output.txt');
    });
});
