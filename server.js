import express from 'express';
const app = express();


// Database connection
import connectDB from './db/connect.js';

// npm package dependency for .env variables
import dotenv from 'dotenv'
dotenv.config();

// Middlewares
import notFoundMiddleware from './middleware/not-found.js';
import errorHandler from './middleware/error-handler.js';



app.get('/', (req, res) => {
    //throw new Error('error');
    res.send('Wellcome')
})


// If non of routes match, use not-found middleware for any http method
app.use(notFoundMiddleware);

// Error handler for all existing routes
app.use(errorHandler);

const port = process.env.PORT || 5000;      



// Spin up server if the connection to database is successful. 
// Async / await implementation - mongoose connection returns a promise
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();    