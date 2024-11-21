import express from 'express';
import {createBeer, deleteBeer, getBeerById, getBeers, updateBeer} from '../controllers/BeerController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Beers
 *   description: Beer management
 */

/**
 * @swagger
 * /beers:
 *   get:
 *     summary: Get all beers
 *     tags: [Beers]
 *     responses:
 *       200:
 *         description: A list of beers with their brewery details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_beer:
 *                     type: string
 *                     example: a0000018-aaaa-0018-aaaa-aaaaaaaaaaaa
 *                   name:
 *                     type: string
 *                     example: Golden Ale
 *                   description:
 *                     type: string
 *                     example: A crisp and refreshing beer.
 *                   abv:
 *                     type: number
 *                     example: 5.5
 *                   price:
 *                     type: number
 *                     example: 4.99
 *                   id_brewery:
 *                     type: string
 *                     example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                   brewery_name:
 *                     type: string
 *                     example: Golden Brewery
 *                   brewery_country:
 *                     type: string
 *                     example: USA
 */
router.get('/beers', getBeers);

/**
 * @swagger
 * /beers/{id}:
 *   get:
 *     summary: Get a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The beer ID
 *     responses:
 *       200:
 *         description: Beer details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_beer:
 *                   type: string
 *                   example: a0000018-aaaa-0018-aaaa-aaaaaaaaaaaa
 *                 name:
 *                   type: string
 *                   example: Golden Ale
 *                 description:
 *                   type: string
 *                   example: A crisp and refreshing beer.
 *                 abv:
 *                   type: number
 *                   example: 5.5
 *                 price:
 *                   type: number
 *                   example: 4.99
 *                 id_brewery:
 *                   type: string
 *                   example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                 brewery_name:
 *                   type: string
 *                   example: Golden Brewery
 *                 brewery_country:
 *                   type: string
 *                   example: USA
 *       404:
 *         description: Beer not found
 */
router.get('/beers/:id', getBeerById);

/**
 * @swagger
 * /beers:
 *   post:
 *     summary: Create a new beer
 *     tags: [Beers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_brewery:
 *                 type: string
 *                 example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *               name:
 *                 type: string
 *                 example: Golden Ale
 *               description:
 *                 type: string
 *                 example: A crisp and refreshing beer.
 *               abv:
 *                 type: number
 *                 example: 5.5
 *               price:
 *                 type: number
 *                 example: 4.99
 *     responses:
 *       201:
 *         description: Beer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_beer:
 *                   type: string
 *                   example: a0000018-aaaa-0018-aaaa-aaaaaaaaaaaa
 *                 id_brewery:
 *                   type: string
 *                   example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                 name:
 *                   type: string
 *                   example: Golden Ale
 *                 description:
 *                   type: string
 *                   example: A crisp and refreshing beer.
 *                 abv:
 *                   type: number
 *                   example: 5.5
 *                 price:
 *                   type: number
 *                   example: 4.99
 */
router.post('/beers/', createBeer);

/**
 * @swagger
 * /beers/{id}:
 *   put:
 *     summary: Update a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The beer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Beer
 *               description:
 *                 type: string
 *                 example: A bold and smooth taste.
 *               abv:
 *                 type: number
 *                 example: 6.2
 *               price:
 *                 type: number
 *                 example: 5.49
 *     responses:
 *       200:
 *         description: Beer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_beer:
 *                   type: string
 *                   example: a0000018-aaaa-0018-aaaa-aaaaaaaaaaaa
 *                 name:
 *                   type: string
 *                   example: Updated Beer
 *                 description:
 *                   type: string
 *                   example: A bold and smooth taste.
 *                 abv:
 *                   type: number
 *                   example: 6.2
 *                 price:
 *                   type: number
 *                   example: 5.49
 *       404:
 *         description: Beer not found
 */
router.put('/beers/:id', updateBeer);

/**
 * @swagger
 * /beers/{id}:
 *   delete:
 *     summary: Delete a beer by ID
 *     tags: [Beers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The beer ID
 *     responses:
 *       200:
 *         description: Beer deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Beer deleted successfully
 *       404:
 *         description: Beer not found
 */
router.delete('/beers/:id', deleteBeer);

export default router;
