import Message from '../../models/message.model.js';

export const fetchMessage = async () => {
  return await Message.findOne();
};
