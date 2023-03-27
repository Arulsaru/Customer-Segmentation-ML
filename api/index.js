var express = require('express');
const body = require('body-parser');
const {port} = require('./constant.js')
const fs = require('fs');

const app = express();
app.use(body.json());


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

function parseJSON() {
    const data = fs.readFileSync('./users.json');
    return JSON.parse(data);
}

// app.get('/', (req, res) => {
//     console.log("ads");
//     return res.send("asd")
// })

app.post('/user/create', (req, res) => {
    
    // phone number and email already irukka nu paakanuu
    const users = parseJSON();
    users.push(req.body);
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.json({msg: 'New user created'});
    return false;
})

app.post('/user/login', (req, res) => {
    const users = parseJSON();
    users.forEach((element) => {

        if(element.userName === req.body.username) {
            console.log(element.userName, req.body.username);

            if(element.password === req.body.password) {
                res.status(200).json({msg: `Login successfull`});
                return false;
            }

            res.status(401).json({msg: `Password doesn't match`});
            return false;
        }

        res.status(404).json({msg: `user not found`});
        return false;
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})