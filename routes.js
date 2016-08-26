var Finder = require('fs-finder');

exports.endpoints = [
    {
        /*
        This logic could be rearranged to take a file extension and figure out the entry folder
        based on the extension. Fs-finder is pretty powerful and will find any file in the filesystem without being
        directed to the specific folder.
         */
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