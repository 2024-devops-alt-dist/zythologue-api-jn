import express from 'express';
import {createBeer, deleteBeer, getBeerById, getBeers, updateBeer} from '../controllers/BeerController';

const router = express.Router();

router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);
router.post('/beers/', createBeer);
router.put('/beers/:id', updateBeer);
router.delete('/beers/:id', deleteBeer);

export default router;
