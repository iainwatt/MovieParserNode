const express = require('express')
const app = express()
const port = 3000
var fs = require('fs');


try {
    var data = fs.readFileSync('MovieScripts/dances_with_wolves.txt', 'utf8');
    console.log(data.toString());
} catch (e) {
    console.log('Error:', e.stack);
}