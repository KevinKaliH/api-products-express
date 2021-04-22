import express from 'express';
import config from './config';
import expressLoader from './libs/express.lib'
import mongooseLoader from './libs/mongoose.lib'

const app = express();

app.listen(config.PORT, () => {
    expressLoader(app);
    mongooseLoader();

    console.log(`server running at localhots: ${config.PORT}`);
})
