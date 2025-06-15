import dotenv from 'dotenv';
dotenv.config();

import sequelize from './config/database.js';
import app from './app.js';

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to DB');
    await sequelize.sync(); // use { force: true } for dev resets
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('DB connection failed:', err);
  }
})();
