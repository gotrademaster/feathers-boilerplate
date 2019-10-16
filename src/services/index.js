const example = require('./example/example.service');

module.exports = function (app) {
  app.configure(example);
};
