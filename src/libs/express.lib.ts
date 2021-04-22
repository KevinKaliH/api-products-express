import express from 'express';
import cors from 'cors';
import router from '../routes/index.routes'

export default function(app: express.Application){
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use("/api", router());
}