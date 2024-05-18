// imports
import express from 'express';
import connectDB from './src/config/config.js';
import mailRoutes from './src/features/mail/mailRoutes.js';

// creating Server
const server = express();

// Middleware
server.use(express.json());

// API Routes
server.use('/api/mail', mailRoutes);

// Welcome Msg
server.get('/', (req, res) => {
  res.send("Welcome To Mail API");
});

// server Port
server.listen(3005, async () => {
  console.log("Server is running on port 3005");
  await connectDB();
});
