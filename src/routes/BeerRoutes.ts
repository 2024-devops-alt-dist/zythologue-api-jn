import express from 'express';
import {createBeer, getBeerById, getBeers, updateBeer} from '../controllers/BeerController';

const router = express.Router();

router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);
router.post('/beers/', createBeer);
router.put('/beers/:id', updateBeer);

export default router;
