const serverless = require('serverless-http')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
dotenv.config({ path: './variables.env' })

const noteRouter = require('./routers/noteRouter');

mongoose.connect(process.env.DB), { useNewUrlParser: true };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({})
    }
    next();
})

app.use('/notes', noteRouter);

app.get('/', async function (req, res) {
    console.log(process.env);
    res.status(200).json({
        hello: 'world'
    });
});

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

exports.handler = serverless(app);