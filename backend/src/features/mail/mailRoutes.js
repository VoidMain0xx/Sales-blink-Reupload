// routes.js
import express from 'express';
import { sendWelcomeEmail, sendNotificationEmail } from './mailController.js';

const mailRouter = express.Router();

// Route to schedule a welcome email
mailRouter.post('/schedule/welcome', sendWelcomeEmail);

// Route to schedule a reminder email
mailRouter.post('/schedule/reminder', sendNotificationEmail);

// Add routes for other types of emails as needed...

export default mailRouter;
