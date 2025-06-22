import Message from './message.model.js';

export const addMessage = async (reqParams) => {
  return await Message.create(reqParams);
};

export const updateMessage = async (id, reqParams) => {
  return await Message.findByIdAndUpdate(id, reqParams, {
    new: true,
    runValidators: true,
  });
};

export const getMessages = async () => {
  return await Message.find();
};

export const removeMessage = async (reqParams) => {
  return await Message.findByIdAndDelete(reqParams);
};
