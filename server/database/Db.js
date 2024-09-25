import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();


const Db = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
              // Optional: for deprecating findAndModify
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process if connection fails
    }
};

export default Db;