import mongoose from 'mongoose';

// Mongoose connect returns promise, need to implement async/await in server.js
const connectDB = (url) => {
    return mongoose.connect(url)
};

export default connectDB;

