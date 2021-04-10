import {Request, Response} from "express";

import {generateSerial} from '../../utils/helpers'

import {connection} from '../../infrastructure/Database/mysql';

export const getProductsOrderByUser = async (req:Request, res:Response): Promise<Response> =>{
    const {user_email} = req.body;
    const getIdUser = await connection.query('SELECT * FROM userInfo WHERE user_email = ?', user_email);
    // @ts-ignore
    const id_user = getIdUser[0].id;
    const rows = await connection.query('SELECT * FROM userOrders WHERE id_user = ?',id_user);
    return  res.status(201).json(rows);
}

export const makeProductsOrder = async (req:Request, res:Response): Promise<Response> =>{
    const {user_email, products} = req.body;

    const getIdUser = await connection.query('SELECT * FROM userInfo WHERE user_email = ?', user_email);
    const order_number = generateSerial();

    //@ts-ignore
    const id_user = getIdUser[0].id;
    const productsStringified = JSON.stringify(products);

    const newOrder = {
        order_number,
        products:productsStringified,
        id_user,
    }

    const rows = await connection.query('INSERT INTO userOrders set ?', [newOrder]);

    return  res.status(201).json("Orden creada");

}