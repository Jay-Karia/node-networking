const net = require("net");

const options = {
  port: 9090
}

const client = net.createConnection(options, () => {
  console.log("Connected to server!");
  client.write("Hello, server! From TCP Client.");
})

client.on("data", (data) => {
  console.log("Received from server: " + data.toString());
  client.end();
})
