import express from 'express'
// @ts-ignore
import cors from 'cors';
import breweryRoutes from './routes/BreweryRoutes'
import beerRoutes from './routes/BeerRoutes'
import {swaggerSpec, swaggerUi} from "./swagger";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
}));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(breweryRoutes);
app.use(beerRoutes);

export default app;
