import {Router} from 'express';
import {chekAPI} from '../controllers/CheckAPIController'

const router = Router();

router.get('/', chekAPI);

export default router;