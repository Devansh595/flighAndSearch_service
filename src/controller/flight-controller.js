const {FlightService} = require('../services/index');


const flightService = new FlightService();

const create = async (req,res)=> {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            message: 'succesfully created the flight',
            err :{}
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success : false,
                message: 'not able to create flight',
                err : error
            
            }
        );
        
    } 

}

const getFlightData = async (req,res)=> {
    try {
        const flight = await flightService.getFlightData(req.params.id);
        return res.status(201).json({
            data : flight,
            success : true,
            message: 'succesfully  fetched the  flight',
            err :{}
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success : false,
                message: 'Not able to fetch the flights',
                err : error
            
            }
        );
        
    } 
}



const getAllFlightData = async (req,res)=> {
    try {
        const flight = await flightService.getAllFlightsData(req.query);
        return res.status(201).json({
            data : flight,
            success : true,
            message: 'Successfully fetched the flights ',
            err :{}
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success : false,
                message: 'Not able to fetch the flights',
                err : error
            
            }
        );
        
    } 
}

const update = async (req,res)=> {
    try {
        const flight = await flightService.update(req.params.id, req.body);
        return res.status(201).json({
            data : flight,
            success : true,
            message: 'Successfully update the flights ',
            err :{}
        });        
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                data: {},
                success : false,
                message: 'Not able to update the flights',
                err : error
            
            }
        );
        
    } 
}




module.exports = {
           create,
           getFlightData,
           getAllFlightData,
           update
}