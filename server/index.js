



// // next article try
// import cors from "cors";
// import express from "express";
// const app = express();
// import http from "http";
// import { url } from "inspector";
// const server = http.createServer(app);
// import {Server} from "socket.io";
// const io = new Server(server);
// // app.use(cors({
// //   origin:"http://localhost:3000",
// // }));

// // app.use(cors());
// app.use(express.urlencoded({ extended: false }));

// app.use(express.json());
// io.listen(4000,{cors:{origin:["http://localhost:3000"]}}, () => {
//   console.log('listening on *:4000');
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   console.log(socket.id);
//   // console.log(socket);
//   // socket.on('chatmessage', (msg) => {
//   //   console.log("vellowwaefhioahdfoihefhieh");
//   //   console.log( msg);
//   // });
//   socket.on('disconnect',()=>{
//     console.log("user got disconnected");
//     console.log("...........................");
//   })
// });

// io.on('connection', (socket) => {
//   socket.on('chat message', (obj) => {
//     console.log(obj.message);
//   });
// });




import express from "express";
import cors from "cors";
const app = express();
import http from "http";
const server = http.createServer(app);


app.use(cors());

// import {Server as io} from "socket.io";
import * as socketio from 'socket.io'; 
const io = new socketio.Server(server);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });


// io.on("connection",socket=>{
//   console.log("connection made successfully");
// }) 

io.on('connection', socket => {
  console.log('connection made successfully');
  // socket.emit('status', 'Hello from Socket.io');
 
  socket.on('message',payload=>{
    console.log("message was recieved here on server:",payload)
    io.emit('message',payload);
  })

  // socket.on('disconnect', () => {
  //     console.log('client disconnected');
  // })
});

server.listen(5000, () => {
  console.log('listening on *:5000');
});


