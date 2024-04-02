import express from 'express';
import {
  checkToken,
  userDeleteCurrent,
  userGet,
  userListGet,
  userPost,
  userPutCurrent,
} from '../controllers/userController';
import {authenticate, validationErrors} from '../../middlewares';
import {param} from 'express-validator';

const router = express.Router();

router
  .route('/')
  .get(userListGet)
  .post(userPost)
  .put(authenticate, userPutCurrent)
  .delete(authenticate, userDeleteCurrent);

router.get('/token', authenticate, checkToken);

router
  .route('/:id')
  .get(param('id').isMongoId().notEmpty(), validationErrors, userGet);

export default router;
