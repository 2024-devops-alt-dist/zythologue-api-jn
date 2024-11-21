import express from 'express';
import { getBreweries, createBrewery } from '../controllers/BreweryController';

const router = express.Router();

router.get('/breweries', getBreweries);
router.post('/breweries', createBrewery);

export default router;
