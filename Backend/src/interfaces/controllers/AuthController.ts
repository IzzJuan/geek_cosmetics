import {Request, Response} from 'express';

import {connection} from '../../infrastructure/Database/mysql';
import helpers from "../../utils/helpers";

export const register = async (req: Request, res: Response): Promise<Response> => {

    const {user_name, user_lastname, user_email, user_pass, user_adress} = req.body;

    const newUser = {
        user_name,
        user_lastname,
        user_email,
        user_pass,
        user_adress
    }

    const rows = await connection.query('SELECT * FROM userInfo where user_email = ?', user_email);

    // @ts-ignore
    if (rows.length > 0) {
        return res.json({registered: true});
    } else {
        try{
            newUser.user_pass = await helpers.encryptPassword(user_pass);
            await connection.query('INSERT INTO userInfo set ?', [newUser]);
        }catch(Exception){
            return res.json({created: false});
        }
        
    }

    return res.json({created: true});
}

// @ts-ignore
export const login = async (req: Request, res: Response): Promise<Response> => {

    const {user_email, user_pass} = req.body;
    console.log(user_email, user_pass);
    const rows = await connection.query('SELECT * FROM userInfo WHERE user_email = ?', user_email);

    // @ts-ignore
    if (rows.length > 0) {

        // @ts-ignore
        const savedpass = rows[0].user_pass;
        const validPass = await helpers.matchPassword(user_pass, savedpass);

        return validPass ?  res.json({validLogin: true}) :  res.json({validLogin: false});

    } else {
        return res.json({validLogin: false})
    }

}