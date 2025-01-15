//import { petModel } from '../dao/models/Pet.js'; 

import { petsService, usersService } from "./index.js"
import { generatePet , generateUser} from '../utils/mocks.util.js';



export const generatePetsMocks = async (count) => {

    try {
        const pets = [];      
        for (let i = 0; i < count; i++) {
         
            pets.push(generatePet());
        }
       
        return  petsService.create(pets); 

    } catch (error) {
        throw   new Error(`Error al generar pets: ${error.message}`);
    } 
} 

export const generateUsersMocks = async (count) => {
    try {
        const users = [];
        for (let i = 0; i < count; i++) {
           
            users.push( await generateUser());
        }

        console.log(users)
        return  usersService.create(users); 
    } catch (error) {
        throw   new Error(`Error al generar pets: ${error.message}`);
    } 
}

