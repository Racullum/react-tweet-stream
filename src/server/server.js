const dotenv = require('dotenv').config({path: __dirname + '/../../.env'});
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;
const app = express();

if (dotenv.error) {
    throw dotenv.error
}

const server = http.createServer(app);
const io = socketio(server);
app.use(bodyParser.json());
require('./routes/tweets.js')(app, io);

server.listen(port, () => {
    console.log("Listening...");
});
