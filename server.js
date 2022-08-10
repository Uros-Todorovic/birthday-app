import express from 'express';
const app = express();

// Middleware
import notFoundMiddleware from './middleware/not-found.js';


app.get('/', (req, res) => {
    res.send('Wellcome')
})

// If non of routes match use not found middleware for any http method
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})