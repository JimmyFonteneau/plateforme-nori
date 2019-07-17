const express = require('express');
const bodyParser = require('body-parser');  
const app = express();

// app.use s'applique sur toute les routes
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
require('./middlewares/validateToken')(app);
require('./routes')(app);

app.listen(1234);