const express = require('express');
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const errorHandler = require('./utils/errorHandler');

// Initialize Express
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', articleRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Sync Database and Start Server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
