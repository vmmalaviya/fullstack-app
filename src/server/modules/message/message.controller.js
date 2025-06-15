import * as MessageService from './message.service.js';

export const getMessage = async (req, res) => {
  try {
    const message = await MessageService.fetchMessage();
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};
