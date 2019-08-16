// const OSC = require('osc-js')



// // const config = { udpClient: { port: 6448 } }
// // // const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })
// //  const osc = new OSC({ plugin: new OSC.WebsocketServerPlugin() })
// // osc.open() // start a WebSocket server on port 8080

// const io = require('socket.io')();
// io.on('connection', client => { 
//     console.log('client connected')
//     io.on('data', function (data) {
//         console.log(data);
//       });
//  });
// io.listen(3000);

const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(3001);
app.use(express.static('public'));
console.log('ev servera')

const io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('new xonnewction' + socket.id)
    socket.on('mouse',mouseMsg);

    function mouseMsg(data) {
        socket.broadcast.emit('mousex',data);
        console.log('data',data);
    }
}