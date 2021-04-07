import {Router} from 'express';
import {getAllProducts} from "../controllers/ProductsController";


const router = Router();

router.get('/products', getAllProducts);

export default router;