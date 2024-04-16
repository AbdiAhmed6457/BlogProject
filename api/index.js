import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routers/user.routers.js';
import authRoutes from './routers/auth.route.js';
import cookieParser from 'cookie-parser';
import postRoutes from './routers/post.route.js'
import mongoose from 'mongoose';
import commentRoutes from './routers/comment.route.js'
import cors from 'cors'
dotenv.config();

mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("mongoDb is connected");
}).
catch((err) => {
    console.log(err);
})


// const __dirname = path.resolve();

const app = express();
app.use(cors(
   { origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true}
))

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});