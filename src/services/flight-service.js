const {FlightRepository,AirplaneRepository} = require('../repositiory/index');
 const {compareTime} = require('../utils/helper')

class FlightService {

    constructor(){
        this.flightrepository = new FlightRepository();
        this.airplanerepository = new AirplaneRepository();

    }

     async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            
          
            const airplane = await this.airplanerepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createflight({
                ...data , totalSeats: airplane.dataValues.Capacity
            });
           
            
            return flight;
            
        } catch (error) {
            console.log("something went wrong in flight services")
            throw {error}
            
        }
    }

     async getFlightData(id){

        try {
            const flight = await this.flightrepository.getFlight(id);
            return flight;
            
        } catch (error) {
            console.log("something went wrong in flight services")
            throw {error}    
        }

     }
     
     async getAllFlightsData(filter){

        try {
            const flights = this.flightrepository.getAllFlights(filter);
            return flights;
            
        } catch (error) {
            console.log("something went wrong in flight services")
            throw {error}
        }

     }

 

    }






module.exports = FlightService;


