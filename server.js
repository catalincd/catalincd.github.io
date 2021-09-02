const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const corsOptions = { origin: false };

app.get('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    var file = fs.readFileSync('./res/data.json');
    res.json(JSON.parse(file));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})