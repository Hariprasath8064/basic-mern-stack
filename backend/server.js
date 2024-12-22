import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDB } from './config/db.js';
import productRoutes from './routes/products.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5070;

const __dirname = path.resolve();
app.use(express.json());

app.use('/api/products',productRoutes);



app.listen(PORT,() => {
    connectDB();
    console.log('Server started at http://localhost: '+PORT);
});