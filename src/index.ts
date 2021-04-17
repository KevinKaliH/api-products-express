import express from 'express';
import expresslib from './libraries/express-lib';
const app = express();

expresslib(app);

app.listen(3000, ()=>{
    console.log("running in 3000 localhost")
})