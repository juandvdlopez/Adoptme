import { fakerES as faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generatePet=()=>{


    return { 
    name: faker.person.firstName(), // Nombre aleatorio
    
    specie: faker.helpers.arrayElement(['Dog', 'Cat', 'Bird', 'Fish', 'Reptile']), 

    birthDate: faker.date.birthdate(),
    //adopted: faker.datatype.boolean(), // Valor booleano aleatorio
    adopted: false,
    //owner: ownerId || new mongoose.Types.ObjectId(), // ID del propietario, o uno nuevo si no se pasa
    owner: null, 
    image: faker.string.alphanumeric(10), 
    }
} 


export const generateUser=async ()=>{
    
    const plainPassword = 'coder123'; // Contraseña fija
    const hashedPassword = await bcrypt.hash(plainPassword, 10); 
   

   return { 

    first_name: faker.person.firstName(), 
    last_name: faker.person.lastName(),
    email: faker.internet.email(), 
    password: hashedPassword,
    role: faker.helpers.arrayElement(['user', 'admin']),
    pet: [], 
   }
} 

