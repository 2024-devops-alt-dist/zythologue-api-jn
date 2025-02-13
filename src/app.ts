import dotenv from 'dotenv';
import {Pool} from 'pg';
import cors from 'cors';
import express from 'express';
import beerRoutes from './routes/BeerRoutes'
import {swaggerSpec, swaggerUi} from "./swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4242;

// app.get('/', async (_, res) => {
//     const pool = new Pool({
//         connectionString: process.env.DATABASE_URL,
//         ssl: { rejectUnauthorized: false }
//     });
//     const client = await pool.connect();
//     const result = await client.query('SELECT version()');
//     client.release();
//     const { version } = result.rows[0];
//     res.json({ version });
// });
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(beerRoutes);

export default app;