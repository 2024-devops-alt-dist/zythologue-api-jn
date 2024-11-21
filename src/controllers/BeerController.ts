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