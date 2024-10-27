import express from "express";
import configureServer from './routes/index.js'
import cors from "cors";


const app = express();

// Configure CORS to allow Content-Type header
app.use(cors({
    origin: 'http://localhost:3001', // replace with your frontend URL
    methods: ['POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configureServer(app)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});