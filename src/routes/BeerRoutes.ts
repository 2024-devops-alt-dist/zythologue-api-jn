import express from 'express';
import {createBeer, getBeerById, getBeers} from '../controllers/BeerController';

const router = express.Router();

router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);
router.post('/beers/', createBeer);

export default router;
