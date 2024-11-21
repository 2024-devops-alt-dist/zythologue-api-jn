import express from 'express';
import { getBeers } from '../controllers/BeerController';

const router = express.Router();

router.get('/beers', getBeers);

export default router;
