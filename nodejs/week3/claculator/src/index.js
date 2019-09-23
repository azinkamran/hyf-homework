const express = require('express');
const app = express();

//http://localhost:3002/calculator/multiply?firstParam=5&secondParam=2
app.get('/calculator/multiply', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    console.log(numbers);
    const multiplication = numbers.reduce((total, amount) => total * amount);

    res.send(multiplication.toString());
})
//http://localhost:3002/calculator/division?firstParam=5&secondParam=2
app.get('/calculator/division', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    console.log(numbers);
    const division = numbers.reduce((total, amount) => total / amount);

    res.send(division.toString());
})

//http://localhost:3002/calculator/add?firstParam=5&secondParam=2
app.get('/calculator/add', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    console.log(numbers);
    const add = numbers.reduce((total, amount) => total + amount);

    res.send(add.toString());
})

//http://localhost:3002/calculator/subtract?firstParam=5&secondParam=2
app.get('/calculator/subtract', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    console.log(numbers);
    const subtract = numbers.reduce((total, amount) => total - amount);

    res.send(subtract.toString());
})



app.listen(3002, () => {
    console.log('Server is listening at 3002');
});