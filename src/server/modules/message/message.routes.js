import express from 'express';
import { getMessages, addMessage, removeMessage } from './message.controller.js';

const router = express.Router();

router.get('/get-messages', getMessages);
router.post('/create-message', addMessage);
router.get('/delete-message/:id', removeMessage);

export default router;
