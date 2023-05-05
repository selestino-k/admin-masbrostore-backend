import Gamelist from "../models/gamesModel.js";

export const getGames = async(req,res) =>{
    try{
        const response = await Gamelist.findAll();
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}


export const getGamesbyId = async(req,res) =>{
    try{
        const response = await Gamelist.findOne({
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
export const getGamesPUBGM = async(req,res) =>{
    try{
        const response = await Gamelist.findAll({
            where:{
                Game : 'PUBGM'
            }
        });
        
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}

export const getGamesFF = async(req,res) =>{
    try{
        const response = await Gamelist.findAll({
            where:{
                Game : 'FF'
            }
        });
        
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}
export const getGamesMLBB = async(req,res) =>{
    try{
        const response = await Gamelist.findAll({
            where:{
                Game : 'MLBB'
            }
        });
        
        res.status(200).json(response);
    }
        catch(error){
            console.log(error.message);
        }
}

export const addGame = async(req,res) =>{
    try{
        await Gamelist.create(req.body)
        res.status(201).json({msg:"Game amount Added"});
    }
        catch(error){
            console.log(error.message);
        }
} 

export const updateGame = async(req,res) =>{
    try{
        await Gamelist.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:"Game amount updated"},id);
    }
        catch(error){
            console.log(error.message);
        }
} 

export const deleteGame = async(req,res) =>{
    try{
        await Gamelist.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({msg:"Game Deleted"},);
    }
        catch(error){
            console.log(error.message);
        }
} 

