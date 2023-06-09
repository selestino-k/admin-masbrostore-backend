import Userorder from "../models/userorderModel.js"; 

export const getUsers = async(req,res) =>{
    try{
        const response = await Userorder.findAll();
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}


export const getUserbyId = async(req,res) =>{
    try{
        const response = await Userorder.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}

export const createUser = async(req,res) =>{
    try{
        await Userorder.create(req.body)
        res.status(201).json({msg:"User Created"});
    }
        catch(error){
            console.log(error.message);
        }
} 

export const updateUser = async(req,res) =>{
    try{
        await Userorder.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:"User Updated"},id);
    }
        catch(error){
            console.log(error.message);
        }
} 

export const deleteUser = async(req,res) =>{
    try{
        await Userorder.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:"User Deleted"},);
    }
        catch(error){
            console.log(error.message);
        }
} 