/**
 * Created by jeanderson on 8/25/2016.
 */

var path = require('path'),
    fs = require('fs'),
    Hapi = require('hapi'),
    request = require('request'),
    Routes = require('./routes');

function startServer()  {
    const server = new Hapi.Server();
    server.connection({host: 'localhost',  port: 9001 });
    server.register(require('inert'), (err) => {
        server.route(Routes.endpoints);
    });
    return server;
}

module.exports = {
    startServer: startServer
};