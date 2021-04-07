import mysql, {PoolConnection} from 'mysql2';
import ErrnoException = NodeJS.ErrnoException;
import {promisify} from "util";

export const connection = mysql.createPool({
    host:'database-instance.c3jkemwvwcuj.us-east-2.rds.amazonaws.com',
    port:3306,
    user:'admin',
    password:'adminmaster',
    database:'geek-cosmetics'
})

connection.getConnection((err:ErrnoException, connection:PoolConnection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error("La conexion con la base de datos fue cerrada");
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexion con la base de datos ha sido rechazada');
        }
    }

    if (connection) connection.release();
    console.log('Base de datos conectada');
    return;
});

// @ts-ignore
connection.query = promisify(connection.query);