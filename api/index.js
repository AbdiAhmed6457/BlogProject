import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routers/user.routers.js';
import authRoutes from './routers/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("mongoDb is connected");
}).
catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log("listening to port 3000....")
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message ||  'internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})