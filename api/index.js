import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("mongoDb is connected");
}).
catch((err) => {
    console.log(err);
})


app.listen(3000, () => {
    console.log("listening to port 3000....")
})