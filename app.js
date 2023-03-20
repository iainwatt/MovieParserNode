const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');


let result = {
    "character_name": ["line1", "line2"]
}

try {
    var data = fs.readFileSync('MovieScripts/dances_with_wolves.txt', 'utf8');
} catch (e) {
    console.log('Error:', e.stack);
}


data.split(/\r?\n/).forEach(line => {
    console.log(`--> ${line}`);
});
