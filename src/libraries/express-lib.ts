import express, { Router } from 'express';
import routes from '../api'
import cors from 'cors';

export default function(app: Router){
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    app.use("/api", routes);
}