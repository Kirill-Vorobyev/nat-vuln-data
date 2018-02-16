const Ddos = require('ddos');
const express = require('express');
const ddos = new Ddos({burst:10,limit:42,responseStatus: 429});
const router = express.Router();
const path = require('path');
const api = require('./server/api/api');

//initialize express
const service = express();

service.use(ddos.express);

//serve react files
service.use(express.static(path.join(__dirname,'client/build')));

//put all api endpoints under '/api'
service.use('/api',api);

//catchall redirect back to react front-end
service.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//define a port
const port = process.env.PORT || 5000;

//enable listener
service.listen(port);

//verify port
console.log(`Listening on port ${port}`);