import express from 'express';
import cors from 'cors';
import messageRoutes from './modules/message/message.routes.js';
import userRoutes from './modules/user/user.routes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Route registration
app.get('/', (req, res) => {
  res.send('Welcome to the API Server');
});
app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date().toISOString() });
});
app.use('/api', messageRoutes, userRoutes);

export default app;
