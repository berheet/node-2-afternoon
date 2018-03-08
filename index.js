const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const port = 3000;
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());
app.use(cors ());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    })

    app.get('/api/products', controller.getAll);
    app.get('/api/product/:id', controller.getOne);
    app.put('/api/product/:id', controller.update);
    app.post('/api/product', controller.create);
    app.delete('/api/product/:id', controller.delete);    

app.listen( port, () => {
    console.log(`Server listening on port ${port}`)
});