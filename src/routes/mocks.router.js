import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import usersController from '../controllers/users.controller.js';




const router = Router();


router.post('/mockingpets', petsController.createPetsMocks); 
router.get('/mockingpets', petsController.getAllPets);

router.post('/mockingusers', usersController.createUsersMocks); 
router.get('/mockingusers', usersController.getAllUsers);



export default router;