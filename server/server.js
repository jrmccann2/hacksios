const   express = require('express')
        , bodyParser = require('body-parser')

const PORT = 3010;

const app = express();

app.use(express.static(__dirname + '/../build'))

app.use(bodyParser.json());

app.get('/api/endpoint', (req, res) => {
    return res.status(200).send('KaBOOOOOOM!!!')
})

const collector = [];

app.post('/api/endpoint', (req, res) => {
    collector.push(req.body)
    return res.status(200).send(collector)
})


