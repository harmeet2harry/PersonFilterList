

const express = require('express');
const  app = express();
app.listen(process.env.PORT || 3000);
const favicon = require('serve-favicon');
const path = require('path');
app.use(express.static(__dirname + '/dist'));
app.use(favicon(__dirname + '/dist/PersonListFilter/favicon.ico'));


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/PersonListFilter/index.html'));
});