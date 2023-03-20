const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');


let result = {
    "SURGEON 1 (O.S.)": ["Is this the last one?", "There will be if it doesn't come off."],
    "SURGEON 2 (O.S.)": ["God, what a mess... at least there's no gangrene.", "line2"],
}

try {
    var data = fs.readFileSync('MovieScripts/dances_with_wolves.txt', 'utf8');
} catch (e) {
    console.log('Error:', e.stack);
}


data.split(/\r?\n/).forEach(line => {
    console.log(`--> ${line}`);
});
