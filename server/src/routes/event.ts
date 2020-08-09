import express, { Router } from 'express';
import controller from '../controllers/event';


const router: Router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.post('/', controller.createOne);
router.put('/:id', controller.findOneAndUpdate);

export default router;
