import {Request, Response} from 'express';

import {connection} from '../../infrastructure/Database/mysql';

export const sayHello = async (req: Request, res: Response): Promise<Response> => {
    const rows = await connection.query('SELECT * FROM products WHERE id = 1')

    return  res.status(201).json(rows);

}