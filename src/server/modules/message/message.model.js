
import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  text: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', MessageSchema);
export default Message;