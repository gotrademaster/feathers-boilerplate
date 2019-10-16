class Service {

  setup(app) {
    this.app = app;
  }

  async  get(id, params) {
    return {
      'id': id, 
      'params': params
    };
  }

  async find(params) {
    return params;
  }

  async create(data) {
    return data;
  }


}
  
module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
