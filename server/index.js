const express = require('express');
const helmet = require('helmet');
const parser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, '../static')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => res.sendStatus(200))

app.listen(PORT, console.log( `Listening to PORT: ${PORT}`));