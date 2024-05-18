// mailSchema.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const mailSchema = new Schema({
  type: { type: String, enum: ['welcome', 'reminder', 'promotion', 'notification', 'follow-up', 'reply', 'greetings'], required: true },
  to: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  sentAt: { type: Date },
  status: { type: String, enum: ['scheduled', 'sent', 'failed'], default: 'scheduled' }
});

const Mail = mongoose.model('Mail', mailSchema);

export default Mail;
