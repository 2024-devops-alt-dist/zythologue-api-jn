import express from 'express';
import breweryRoutes from './routes/BreweryRoutes'

const app = express();
app.use(express.json());
app.use(breweryRoutes);

export default app;
