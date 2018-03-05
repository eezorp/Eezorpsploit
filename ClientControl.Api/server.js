var express = require('express'),
app = express(),
port = process.env.PORT || 8000,
bodyParser = require('body-parser');
clientController = require("./api/controllers/clientController");
shellcodeController = require("./api/controllers/shellcodeController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cors = require('cors');
var routes = require('./api/routes/routes'); //importing route
app.use(cors());
routes(app); //register the route
app.listen(port);

clientController.__init();
shellcodeController.__init();

console.log('Started on: ' + port);