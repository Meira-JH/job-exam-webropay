'use strict';

var path = require('path');
var http = require('http');

var oas3Tools = require('oas3-tools');
var serverPort = 3000;
var cors = require('cors')

// swaggerRouter configuration
var options = {
    controllers: path.join(__dirname, './controllers')
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
expressAppConfig.addValidator();
var app = expressAppConfig.getApp();
var corsOptions = {
    origin: "http://localhost:3030",
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions))

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

