import express from 'express';
import {
    getBreweries,
    createBrewery,
    getBreweryById,
    updateBrewery,
    deleteBrewery
} from '../controllers/BreweryController';

const router = express.Router();

router.get('/breweries', getBreweries);
router.get('/breweries/:id', getBreweryById);
router.post('/breweries', createBrewery);
router.put('/breweries/:id', updateBrewery);
router.delete('/breweries/:id', deleteBrewery);

export default router;
