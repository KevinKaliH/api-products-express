import Router from 'express';
import roleController from '../controllers/role.controller'
import { checkRole, isAuthenticate } from '../middleware/auth.middleware';
const router = Router();

router.post('/create', [isAuthenticate, checkRole(['admin'])], roleController.Create);
router.get('/all', [isAuthenticate, checkRole(['admin', 'reader'])], roleController.GetAll);

export default router;