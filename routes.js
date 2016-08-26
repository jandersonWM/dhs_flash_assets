var Finder = require('fs-finder');

exports.endpoints = [
    {
        method: 'GET',
        path: '/{path*}',
        handler: function (req, reply) {

            var pathArray = req.params.path.split('/'),
                fileName = pathArray.pop(),
                newPath = pathArray.join("\\"),
                locBuilder = __dirname + '\\' + newPath;

            var files = Finder.from(locBuilder)
                .findFiles((fileName + '.*'));

            if (files.length) {
                return reply.file(files[0], {confine: false});
            }
            else {
                return console.log('File ' + req.params.fileName + ' not found');
            }
        }
    }
];