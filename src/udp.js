const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (msg, rinfo) => {
  console.log(`Received from client: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081, () => {
  console.log("UDP server is listening on port 8081");
});
