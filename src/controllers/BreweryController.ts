import { Request, Response } from 'express';
import { query } from '../db';

export const getBreweries = async (req: Request, res: Response) => {
    try {
        const result = await query('SELECT * FROM breweries');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch breweries' });
    }
};

export const createBrewery = async (req: Request, res: Response) => {
    try {
        const { name, country } = req.body;
        const result = await query(
            'INSERT INTO breweries (id_brewery, name, country) VALUES (gen_random_uuid(), $1, $2) RETURNING *',
            [name, country]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create brewery' });
    }
};

export const getBreweryById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM breweries WHERE id_brewery = $1', [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Brewery not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch brewery' });
    }
};

export const updateBrewery = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, country } = req.body;

        const result = await query(
            'UPDATE breweries SET name = $1, country = $2 WHERE id_brewery = $3 RETURNING *',
            [name, country, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ error: 'Brewery not found' });
            return;
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update brewery' });
    }
};