import express from 'express';
import {getBeerById, getBeers} from '../controllers/BeerController';

const router = express.Router();

router.get('/beers', getBeers);
router.get('/beers/:id', getBeerById);

export default router;
