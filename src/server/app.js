import express from 'express';
import cors from 'cors';
import messageRoutes from './modules/message/message.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Route registration
app.use('/api/message', messageRoutes);

export default app;
