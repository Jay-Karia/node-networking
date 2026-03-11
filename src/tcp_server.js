const net = require('net');

const server = net.createServer((connection) => {
  console.log('Client connected');

  connection.on('data', (data) => {
    console.log('Received from client: ' + data.toString());
    connection.write('Hello, client! From TCP Server.');
  });

  connection.on('end', () => {
    console.log('Client disconnected');
  });
})

server.listen(9090, () => {
  console.log('TCP Server is listening on port 9090');
});
