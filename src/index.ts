import express from 'express';
import config from './config';
import expressLoader from './libs/express.lib'
import mongooseLoader from './libs/mongoose.lib'

const app = express();

expressLoader(app);
mongooseLoader();

app.listen(config.PORT, () => {
    console.log(`server running at localhots: ${config.PORT}`);
})
