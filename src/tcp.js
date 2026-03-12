const net = require("net");

const server = net.createServer(socket => {
  socket.write("Hello, client!");
  socket.on("data", data => {
    console.log(`Received from client: ${data}`);
  });
})

server.listen(8080);
