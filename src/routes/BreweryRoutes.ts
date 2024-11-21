import express from 'express';
import { getBreweries, createBrewery, getBreweryById } from '../controllers/BreweryController';

const router = express.Router();

router.get('/breweries', getBreweries);
router.get('/breweries/:id', getBreweryById);
router.post('/breweries', createBrewery);

export default router;
