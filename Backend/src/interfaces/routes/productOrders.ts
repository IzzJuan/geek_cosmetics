import { Router } from "express";
import {makeProductsOrder, getProductsOrderByUser} from "../controllers/ProductsOrdersController";

const router = Router();

router.post('/getorderproduct', getProductsOrderByUser);
router.post('/orderproduct', makeProductsOrder);

export default router;