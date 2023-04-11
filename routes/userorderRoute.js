import express  from "express";
import {getUsers,getUserbyId,createUser,updateUser,deleteUser} from "../controllers/userorderController.js";

const router = express.Router();

router.get('/userorder',getUsers);
router.get('/userorder/:id',getUserbyId);
router.post('/userorder/',createUser);
router.patch('/userorder/:id',updateUser);
router.delete('/userorder/:id',deleteUser);
 



export default router;