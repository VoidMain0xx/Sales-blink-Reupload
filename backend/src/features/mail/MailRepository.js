// mailRepository.js
import Agenda from 'agenda';
import mongoose from 'mongoose';

const mongoConnectionString = 'mongodb://localhost:27017/emaail'; // MongoDB connection string
const agenda = new Agenda({ mongo: mongoose.connection });

// Define the mail job processing function
const processMailJob = async (job) => {
  const { type, to, subject, body } = job.attrs.data;

  // Logic to send email based on type
  try {
    console.log(`Sending ${type} email to ${to}...`);
    // Send email using Nodemailer or any other email sending library
    // Example: await sendEmail(to, subject, body);
    console.log(`${type} email sent successfully`);
  } catch (error) {
    console.error(`Error sending ${type} email to ${to}:`, error);
  }
};

// Set up Agenda job processing
agenda.define('sendMail', processMailJob);

// Start Agenda and establish MongoDB connection
(async () => {
  await agenda.start();
})();

// Function to schedule a mail job
export const scheduleMail = async (type, to, subject, body, scheduleTime) => {
  await agenda.schedule(scheduleTime, 'sendMail', { type, to, subject, body });
  console.log(`Mail scheduled for ${scheduleTime}`);
};

// Example usage:
// scheduleMail('welcome', 'recipient@example.com', 'Welcome to our platform!', 'Thank you for joining us.', new Date());
