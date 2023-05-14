import express from "express";
import cors from "cors";
import userorderRoute from './routes/userorderRoute.js';
import gameslistRoute from './routes/gameslistRoute.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(userorderRoute);
app.use(gameslistRoute);


app.listen(5000, ()=> console.log("Server running on port 5000") );

app.all('/', (req, res) => {
    console.log("Tesrequest!")
    res.send('Tes API sukses')
})
