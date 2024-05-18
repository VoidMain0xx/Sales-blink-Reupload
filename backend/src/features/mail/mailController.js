import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Function to send a welcome email
export const sendWelcomeEmail = async (to) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Welcome to our platform!',
    text: 'Thank you for joining us. We are excited to have you on board!'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent successfully');
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw new Error('Error sending welcome email');
  }
};

// Function to send a reminder email
export const sendReminderEmail = async (to) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Reminder: Don\'t forget!',
    text: 'Just a friendly reminder to complete your tasks.'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Reminder email sent successfully');
  } catch (error) {
    console.error('Error sending reminder email:', error);
    throw new Error('Error sending reminder email');
  }
};

// Function to send a promotion email
export const sendPromotionEmail = async (to) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Exclusive Promotion Inside!',
    text: 'Check out our latest offers and promotions just for you.'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Promotion email sent successfully');
  } catch (error) {
    console.error('Error sending promotion email:', error);
    throw new Error('Error sending promotion email');
  }
};

// Function to send a notification email
export const sendNotificationEmail = async (to, message) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Notification',
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');
  } catch (error) {
    console.error('Error sending notification email:', error);
    throw new Error('Error sending notification email');
  }
};

// Function to send a follow-up email
export const sendFollowUpEmail = async (to) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Follow-up on recent conversation',
    text: 'I wanted to follow up on our recent discussion. Do you have any updates or questions?'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Follow-up email sent successfully');
  } catch (error) {
    console.error('Error sending follow-up email:', error);
    throw new Error('Error sending follow-up email');
  }
};

// Function to send a reply email
export const sendReplyEmail = async (to, originalMessage) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Re: Previous Conversation',
    text: `Thank you for your message:\n\n${originalMessage}\n\nBest regards,\nYour Name`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Reply email sent successfully');
  } catch (error) {
    console.error('Error sending reply email:', error);
    throw new Error('Error sending reply email');
  }
};

// Function to send a greetings email
export const sendGreetingsEmail = async (to) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to,
    subject: 'Greetings!',
    text: 'Wishing you a fantastic day ahead!'
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Greetings email sent successfully');
  } catch (error) {
    console.error('Error sending greetings email:', error);
    throw new Error('Error sending greetings email');
  }
};
