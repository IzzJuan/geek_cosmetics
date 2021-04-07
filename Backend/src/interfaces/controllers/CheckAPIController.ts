import {Request, Response} from 'express';

export const chekAPI = async (req: Request, res: Response): Promise<Response> => {

    return res.status(201).send("API funcionando!");

}