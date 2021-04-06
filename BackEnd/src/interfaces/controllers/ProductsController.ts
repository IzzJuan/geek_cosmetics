import {Request, Response} from 'express';

import {connection} from '../../infrastructure/Database/mysql';

export const getAllProducts = async (req: Request, res: Response): Promise<Response> => {
    const rows = await connection.query('SELECT * FROM products')

    return  res.status(201).json(rows);
}