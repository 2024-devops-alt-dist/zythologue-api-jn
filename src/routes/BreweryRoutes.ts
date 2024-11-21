import express from 'express';
import {
    getBreweries,
    createBrewery,
    getBreweryById,
    updateBrewery,
    deleteBrewery
} from '../controllers/BreweryController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Breweries
 *   description: Brewery management
 */

/**
 * @swagger
 * /breweries:
 *   get:
 *     summary: Get all breweries
 *     tags: [Breweries]
 *     responses:
 *       200:
 *         description: A list of breweries.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_brewery:
 *                     type: string
 *                     example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                   name:
 *                     type: string
 *                     example: Golden Brewery
 *                   country:
 *                     type: string
 *                     example: USA
 */
router.get('/breweries', getBreweries);

/**
 * @swagger
 * /breweries/{id}:
 *   get:
 *     summary: Get a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: Brewery details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: string
 *                   example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                 name:
 *                   type: string
 *                   example: Golden Brewery
 *                 country:
 *                   type: string
 *                   example: USA
 *       404:
 *         description: Brewery not found
 */
router.get('/breweries/:id', getBreweryById);

/**
 * @swagger
 * /breweries:
 *   post:
 *     summary: Create a new brewery
 *     tags: [Breweries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Golden Brewery
 *               country:
 *                 type: string
 *                 example: USA
 *     responses:
 *       201:
 *         description: Brewery created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: string
 *                   example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                 name:
 *                   type: string
 *                   example: Golden Brewery
 *                 country:
 *                   type: string
 *                   example: USA
 */
router.post('/breweries', createBrewery);

/**
 * @swagger
 * /breweries/{id}:
 *   put:
 *     summary: Update an existing brewery
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The brewery ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Updated Brewery
 *               country:
 *                 type: string
 *                 example: Canada
 *     responses:
 *       200:
 *         description: Brewery updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_brewery:
 *                   type: string
 *                   example: b0000018-bbbb-0018-bbbb-bbbbbbbbbbbb
 *                 name:
 *                   type: string
 *                   example: Updated Brewery
 *                 country:
 *                   type: string
 *                   example: Canada
 *       404:
 *         description: Brewery not found
 */
router.put('/breweries/:id', updateBrewery);

/**
 * @swagger
 * /breweries/{id}:
 *   delete:
 *     summary: Delete a brewery by ID
 *     tags: [Breweries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The brewery ID
 *     responses:
 *       200:
 *         description: Brewery deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Brewery deleted successfully
 *       404:
 *         description: Brewery not found
 */
router.delete('/breweries/:id', deleteBrewery);

export default router;
