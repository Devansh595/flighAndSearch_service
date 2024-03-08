
const { city } = require('../models/index');
const {Op} = require('sequelize');

class CityRepository {

    async createCity(data) { 
        try {
            const cities= await city.bulkCreate(data);
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await city.destroy({
                  where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     },
            //      
            // });
            // for getting updated data in mysql we use the below approach
            const City = await city.findByPk(cityId);
            City.name = data.name;
            await City.save();
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllcities(filter){
        try {
           
            if(filter.name){
                
                const cities = await city.findAll({
                    where: {
                        name : {
                            [Op.startsWith] : filter.name
                        }
                    }
                 });
                return cities;
             }
            const cities = await city.findAll();
            return cities;  
        } 
            catch (error) {
               onsole.log("Something went wrong in the repository layer");
               throw {error};
            }
    }
    
}

module.exports = CityRepository;