var express = require('express')
var app = express()
var port = process.env.PORT || 8080;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
               'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
               'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ashwin:ashwin@cluster0-le9cj.mongodb.net/whiteboard-cs5610-sp20?retryWrites=true&w=majority',
                 { useNewUrlParser: true, useUnifiedTopology: true })

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./controllers/quizzes.controller.server')(app)
require('./controllers/questions.controller.server')(app)
require('./controllers/quiz-attempts.controller.server')(app)

app.listen(port)
