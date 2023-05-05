import express  from "express";
import {getGames,getGamesbyId,getGamesPUBGM, addGame, updateGame, deleteGame, getGamesFF, getGamesMLBB} from "../controllers/gameslistController.js";

const router = express.Router();

router.get('/games',getGames);
router.get('/games/:id',getGamesbyId);
router.get('/gamefreefire',getGamesFF);
router.get('/gamemlbb',getGamesMLBB);
router.get('/gamepubgm',getGamesPUBGM);


router.post('/games/',addGame);
router.patch('/games/:id',updateGame);
router.delete('/game/:id',deleteGame);
 



export default router;