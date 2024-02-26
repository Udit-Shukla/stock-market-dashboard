const express = require('express');
const app = express();
const port = 3000;
const {createServer} = require("http");
const server = createServer(app);
const {Server} = require("socket.io");
const io = new Server(server,
    {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            credentials: true
        }
    });
const cors = require('cors');

app.use(cors());

const stockname="Zomato";


//generate random stock price from 100 to 500
function generateRandomPrice() {
    const price= (Math.random() * 400) + 100;
    return price.toFixed(2);
}


app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // for sending stock price to client after every 5 seconds
    setInterval(() => {
        socket.emit('stockprice', {stockname: stockname, price: generateRandomPrice()});
        console.log("Stock price sent");
    }, 5000);

});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});