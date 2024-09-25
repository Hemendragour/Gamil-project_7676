import express from "express";
import Db from './database/Db.js';
import routes from "./routes/route.js";
import cors from 'cors';


const app = express();


app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use('/', routes);


const PORT = 8000;

Db();

app.listen(PORT, () => console.log(
    `server is running ${PORT}`
));