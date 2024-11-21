import express from 'express';
import breweryRoutes from './routes/BreweryRoutes'
import beerRoutes from './routes/BeerRoutes'

const app = express();
app.use(express.json());
app.use(breweryRoutes);
app.use(beerRoutes);

export default app;
