const createService = require('./example.class');
const hooks = require('./example.hooks');

module.exports = function (app) {

  const options = {
    name: 'example'
  };

  app.use('/example', createService(options));
  const service = app.service('/example');

  service.hooks(hooks);
};
