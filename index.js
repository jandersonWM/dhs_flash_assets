
'use strict'

var hapi_server = require('./server.js');

var server = hapi_server.startServer();

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at', server.info.uri);
});