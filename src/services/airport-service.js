const AirportRepository = require('../repositiory/airport-repository');
const CrudService = require('./crud-service');


class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }


}


module.exports = AirportService;