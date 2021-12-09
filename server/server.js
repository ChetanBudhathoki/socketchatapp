import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import express from "express";


const app=express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }});



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

  httpServer.listen(7000,() =>{
      console.log("iski aise ki taise");
  });
