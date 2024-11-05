const express = require('express');
const viewRouter = require('./routes/viewRoutes');
const path = require('path');

const app = express();

app.use(express.json());
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',viewRouter);

module.exports = app;