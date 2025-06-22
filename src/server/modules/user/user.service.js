import Message from './user.model.js';

export const createUser = async (reqParams) => {
  return await Message.create(reqParams);
};
export const getUser = async (id) => {
  return await Message.findById(id);
};
export const getUsers = async () => {
  return await Message.find();
};
export const updateUser = async (id, reqParams) => {
  return await Message.findByIdAndUpdate(id, reqParams, {
    new: true,
    runValidators: true,
  });
};
export const deleteUser = async (id) => {
  return await Message.findByIdAndDelete(id);
};