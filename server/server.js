const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', client => {
  console.log("client connected")
});

server.listen(process.env.PORT || 3000, ()=>{
    console.log("server started...")
});