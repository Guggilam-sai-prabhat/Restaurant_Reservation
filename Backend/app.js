import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {dbConnection} from './database/dbConnecttion.js';
import {errorMiddleware} from './error/error.js';
import router from './routes/reservationRoute.js';

const app = express();
dotenv.config({path : "./config.env"});

app.use(cors({
    origin: ["https://restaurant-reservation-dun.vercel.app"],
    credentials: true,
    methods: [ 'POST']

})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation",router);

app.get("/", (req, res, next)=>{return res.status(200)
  .json({
    success: true,
    message: "HELLO WORLD AGAIN"
  })})


dbConnection();

app.use(errorMiddleware);


export default app;
