import express  from "express";
import {getGames,GamesbyId} from "../controllers/gameslistController.js";

const router = express.Router();

router.get('/games',getGames);
router.get('/games/:id',GamesbyId);

 



export default router;