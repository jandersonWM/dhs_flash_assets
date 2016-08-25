/**
 * Created by jeanderson on 8/25/2016.
 */

var path = require('path'),
    fs = require('fs'),
    Hapi = require('hapi'),
    request = require('request'),
    Finder = require('fs-finder');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 9001
});


server.register(require('inert'), (err) => {
    server.route({
        method: 'GET',
        path: '/{folder}/{fileName}',
        handler: function(req, reply) {
            var files = Finder.from(__dirname + '/' + req.params.folder + '/')
                .findFiles(req.params.fileName + '.*');

            if (files.length) {
                return reply.file(files[0], { confine: false} );
            }
            else {
                return console.log('File ' + req.params.fileName + ' not found');
            }
        }
    });

    server.start((err) => {
       if (err) {
           throw err;
       }
       console.log('Server running at', server.info.uri);
    });
})