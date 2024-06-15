const express = require('express')
const cors = require('cors')
const http = require("http")
const app = express();
const socketIo = require('socket.io');
const server = http.createServer(app)
app.use(cors({
    origin: '*',
}))

const io = socketIo(server,{
    cors: {
        origin: '*',
    }
});

io.on('connection', client => {
  console.log("client connected");
  client.on("update_change", (data)=>{
    io.emit('send_changes', data);
  })
  client.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(process.env.PORT || 3000, ()=>{
    console.log("hello this is server running...")
})