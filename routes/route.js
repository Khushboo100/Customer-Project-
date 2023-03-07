import express,{Router} from 'express';
import { addCustomer } from '../controller/customer-controller.js';

const router = express.Router();


router.post('/add',addCustomer);


export default router;