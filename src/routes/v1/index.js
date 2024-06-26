const express = require('express');



const CityController = require('../../controller/city-controller');
const FlightController = require('../../controller/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAllcities);
router.patch('/city/:id', CityController.update);


router.post('/flights' , FlightController.create);
router.get('/flight/:id', FlightController.getFlightData);
router.get('/flight', FlightController.getAllFlightData);
router.patch('/flight/:id', FlightController.update)


module.exports = router;
