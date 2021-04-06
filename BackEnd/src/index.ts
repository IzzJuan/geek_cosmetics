import app from './app'
import * as dotenv from 'dotenv';
import './infrastructure/Database/mysql'

dotenv.config();
app.listen(app.get('port'));
console.log(`Servidor en el puerto http://localhost:${app.get('port')}`);