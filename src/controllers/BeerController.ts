import { Request, Response } from 'express';
import { query } from '../db';

export const getBeers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await query(
            `SELECT beers.*, breweries.name AS brewery_name, breweries.country AS brewery_country
             FROM beers
             LEFT JOIN breweries ON beers.id_brewery = breweries.id_brewery`
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch beers' });
    }
};

export const getBeerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const result = await query(
            `SELECT beers.*, breweries.name AS brewery_name, breweries.country AS brewery_country
             FROM beers
             LEFT JOIN breweries ON beers.id_brewery = breweries.id_brewery
             WHERE beers.id_beer = $1`,
            [id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Beer not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch beer' });
    }
};

export const createBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_brewery, name, description, abv, price } = req.body;
        const result = await query(
            `INSERT INTO beers (id_beer, id_brewery, name, description, abv, price)
             VALUES (gen_random_uuid(), $1, $2, $3, $4, $5)
             RETURNING *`,
            [id_brewery, name, description, abv, price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create beer' });
    }
};

export const updateBeer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, description, abv, price } = req.body;

        const result = await query(
            `UPDATE beers
             SET name = $1, description = $2, abv = $3, price = $4
             WHERE id_beer = $5
             RETURNING *`,
            [name, description, abv, price, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Beer not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update beer' });
    }
};