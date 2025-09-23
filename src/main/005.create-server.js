// Create server
Create_server: {

  const http = require("http");
  const socketIoApi = require("socket.io");
  const { Server: SocketIoServer } = socketIoApi;
  
  const server = http.createServer(Restomatic.application);
  const universalSocketServer = new SocketIoServer(server);

  Restomatic.server = server;
  Restomatic.universalSocketServer = universalSocketServer;

  universalSocketServer.on("connection", function(socket) {
    console.log("User connected to socket.io server nº 1!");
    socket.on("disconnect", () => {
      console.log("User disconnected from socket.io server nº 1");
    });
  });

}