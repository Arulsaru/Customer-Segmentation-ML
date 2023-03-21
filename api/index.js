var express = require('express');
var app = express();
const {port} = require('./constant.js')

app.get('/', function (req, res) {
    console.log('inside');
    res.send('hii');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})