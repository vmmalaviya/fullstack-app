import express from 'express';
import { getMessage } from './message.controller.js';

const router = express.Router();

router.get('/', getMessage);

export default router;
