const express = require('express');
const morgan = require('morgan');
const crudRouting = require('./crudRouting.js');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/', crudRouting);

app.set('views', 'src/views');
app.set('view engine', 'hbs');

// players DB
players = [];

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));