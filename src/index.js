const express = require('express');
const { PORT } = require('./config/serverconfig');
const ApiRoutes = require('./routes/index');
const bodyParser = require("body-parser");
const db = require('./models/index');
const {city, Airport, Airplane} = require('./models/index');
const {sequelize} = require('sequelize');
// const  AirportRepository  = require('./repositiory/airport-repository');
// const airportRepo = new AirportRepository();

function SetupServer(){

    const app  = express();
   
    app.use(bodyParser.json());
    
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT,async ()=>{

            console.log(`server is running at port ${PORT}`);
           if(process.env.DB_SYNC){
               db.sequelize.sync({alter: true})
           }

        //    const airport = await airportRepo.getAll();
        //    console.log(airport);



            //  const airplane = await Airplane.findByPk(1);
            //  console.log(airplane);
            
        //     const cities = await  city.findByPk(5)
        //     console.log(cities)
        //     const airports = await cities.getAirports();
        //     console.log(airports)
        // await Airplane.create({
        //     ModelNumber : 'indigo234'
        // })

    })

}


SetupServer();