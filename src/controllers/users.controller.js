import { usersService } from "../services/index.js"
import { generateUsersMocks } from "../services/mocks.service.js";

const getAllUsers = async(req,res)=>{
    const users = await usersService.getAll();
    res.send({status:"success",payload:users})
}

const getUser = async(req,res)=> {
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error",error:"User not found"})
    res.send({status:"success",payload:user})
}

const updateUser =async(req,res)=>{
    const updateBody = req.body;
    const userId = req.params.uid;
    const user = await usersService.getUserById(userId);
    if(!user) return res.status(404).send({status:"error", error:"User not found"})
    const result = await usersService.update(userId,updateBody);
    res.send({status:"success",message:"User updated"})
}

const deleteUser = async(req,res) =>{
    const userId = req.params.uid;
    const result = await usersService.getUserById(userId);
    res.send({status:"success",message:"User deleted"})
}


const createUsersMocks = async(req,res)=>{

  try {
    const count = parseInt(req.query.count, 10);
    const result = await generateUsersMocks(count);
    res.send({status:"success",payload:result}); 
  } catch (error) {
    res.status(404).send({status:"error",error:error.message});
  }


} 

export default {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser, 
    createUsersMocks,
}