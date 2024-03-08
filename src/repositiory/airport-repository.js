const { Airport } = require('../models/index');
const CrudRespository = require('./crud-repository');

class AirportRepository extends CrudRespository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;