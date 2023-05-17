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
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods: POST,GET, PATCH, DELETE ');

    console.log("Tes request sukses!")
    res.send('Tes API sukses')
})
