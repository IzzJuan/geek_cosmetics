import { Router } from 'express';
import {sayHello} from "../controllers/HelloController";

const router = Router();

router.get('/hello', sayHello);

export default router;