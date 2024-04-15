const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT | 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send({ message: "Hello world!" });
});

app.listen(port, error => {
    if (error) {
        console.error(error);
    }
    console.log(`Listening in ${port}...`);
});
