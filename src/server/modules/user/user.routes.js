import express from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from './user.controller.js';
import { userSchema } from './user.validator.js';
import validate from '../../middlewares/validate.js';

const router = express.Router();

router.post('/users', [validate(userSchema)], createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', [validate(userSchema)], updateUser);
router.delete('/users/:id', deleteUser);

export default router;
