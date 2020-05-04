const express = require('express');
const fetch = require('node-fetch');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const api_key = 'sZv4yD0FxAA2xgRct5FcPi0GMpodUR7O3hIYIwYL';

app.get('/api', async (req, res, next) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
    const fetchResponse = await fetch(url);
    const json = await fetchResponse.json();
    res.json(json)
});

app.get('/api/:date', async (req, res, next) => {
    const input = req.params.date;
    console.log(input);
    const date = `date=${input}&` ;
    let url = `https://api.nasa.gov/planetary/apod?${date}api_key=${api_key}`;
    const fetchResponse = await fetch(url);
    const json = await fetchResponse.json();
    res.json(json)
});

const port = 5000;
//default for react is 3000

app.listen(port, () => console.log(`Server started on port ${port}`));