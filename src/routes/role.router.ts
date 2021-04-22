import Router from 'express';
import roleController from '../controllers/role.controller'
const router = Router();

router.post('/create', roleController.Create);
router.get('/all', roleController.GetAll);

export default router;