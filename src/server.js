const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('MONGO DATABASE',{
 useNewUrlParser: true,
 useUnifiedTopology: true,   
})

app.use(express.json());
app.use(routes);



app.listen(8080);