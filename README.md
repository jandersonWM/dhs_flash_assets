# dhs_flash_assets
=======
Asset server for serving up static files. The server makes use of Hapi
and the Hapi extension Inert for serving static files.

General routing logic is handled in routes.js, uses the fs-finder
library to locate the files in the directory specified by the 
GET request and returns the file over the hapi server connection.

##Usage

After creating a directory run:

```
$ npm install
```

This should install all the libraries defined as dependencies in the package.json

To run the application just run 

```
$ node index.js
```

Any file can be accessed using the path of the file minus the extension. This is under consideration
for change, comments in the routes.js explain.

## Filesystem hierarchy

All images are under the images folder, stylesheets under styles and to-come font files will be 
under fonts directory.

## To Do

Still need to add a bundling library so css can be accessed more easily/without 
calling each individual file