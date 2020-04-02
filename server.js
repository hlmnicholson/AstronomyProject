const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Doe'},
        {id: 2, firstName: 'Billy', lastName: 'Smith'},
        {id: 3, firstName: 'Paul', lastName: 'Jones'},
    ];
    
    res.json(customers);
});

app.get('/api/apollo11', async (req, res) => {
    const api_url = 'https://images-api.nasa.gov/search?q=apollo%2011';
    const fetchResponse = await fetch(api_url);
    const json = await fetchResponse.json();
    console.log(json.collection.href);
    res.json(json);
});


const port = 5000;
//default for react is 3000

app.listen(port, () => console.log(`Server started on port ${port}`));