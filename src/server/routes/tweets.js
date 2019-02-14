const Twitter = require('twitter');
const bodyParser = require('body-parser');

module.exports = (app, io) => {
    app.use(bodyParser.json());
    let twitter = new Twitter({
        consumer_key: process.env.REACT_APP_CONSUMER_KEY,
        consumer_secret: process.env.REACT_APP_CONSUMER_SECRET,
        access_token_key: process.env.REACT_APP_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.REACT_APP_ACCESS_TOKEN_SECRET
    });

    let socketConnection;

    app.locals.searchTerm = 'JavaScript'; //Default search term for twitter stream.
    app.locals.showRetweets = false; //Default

    app.post('/search', (req, res) => {
        console.log(req.body);
        if(req.body !== '') {
          
            app.locals.searchTerm = req.body.search;
            res.sendStatus(200);
        }
        else {
            res.sendStatus(500);
        }
    })
    
    const stream = () => {
        console.log('Resuming for ' + app.locals.searchTerm);
        twitter.stream('statuses/filter', { track: app.locals.searchTerm }, (stream) => {
            stream.on('data', (tweet) => {
                sendMessage(tweet);
            });

            stream.on('error', (error) => {
                console.log(error);
            });

        
        });
    }

    //Establishes socket connection.
    io.on("connection", socket => {
        socketConnection = socket;
        stream();
        socket.on("connection", () => console.log("Client connected"));
        socket.on("disconnect", () => console.log("Client disconnected"));
    });

    /**
     * Emits data from stream.
     * @param {String} msg 
     */
    const sendMessage = (msg) => {
        if (msg.text.includes('RT')) {
            return;
        }
        socketConnection.emit("tweets", msg);
    }
};