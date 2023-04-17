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


export const GamesbyId = async(req,res) =>{
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

