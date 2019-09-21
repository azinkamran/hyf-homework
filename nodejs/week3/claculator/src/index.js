const express = require('express');
const app = express();


app.get('/calculator/multiply', (req, res) => {
    const numbers = [];
    for (const key in req.query) {
        const number = Number(req.query[key]);
        numbers.push(number);
    };
    const multiplication = numbers.reduce((total, amount) => total * amount);

    res.send(multiplication.toString());
})


app.get('/calculator', (req, res) => {
    const key = req.query.key;
    const numbers = [];
    let response;

    for (const param in req.query) {
        const number = Number(req.query[param]);
        // Push only numbers to the array
        if (!isNaN(number)) {
            numbers.push(number);
        }  
    }

    if (key === 'multiply') {
        response = (numbers.reduce((total, amount) => total * amount)).toString();
    } else if (key === 'division') {
        response = (numbers.reduce((total, amount) => total / amount)).toString();
    }else if (key === 'plus') {
      response = (numbers.reduce((total, amount) => total + amount)).toString();
  }else if (key === 'minus') {
    response = (numbers.reduce((total, amount) => total - amount)).toString();
}

    res.send(response);
})

app.listen(3002, () => {
    console.log('Server is listening at 3002');
});