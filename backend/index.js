import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();
const port = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cookieParser());

//file-upload setup
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
  })
);

//MongoDB setup
try {
  mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB Connected");
} catch (error) {
  console.log(error);
}

//defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);


//Cloudinary - Configuration
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_SECRET_KEY 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})