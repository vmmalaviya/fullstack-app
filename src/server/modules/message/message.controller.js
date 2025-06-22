import * as MessageService from './message.service.js';

export const addMessage = async (req, res) => {
  try {
    if (!req.body || !req.body.text) {
      return res.status(400).json({ error: 'Text is required' });
    }
    const reqParams = {
      text: req.body.text,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    let message = {};
    if (req.body.id) {
      reqParams.updatedAt = new Date();
      message = await MessageService.updateMessage(req.body.id, reqParams);
      console.log('Updating message with ID:', message);
    } else {
      reqParams.createdAt = new Date();
      message = await MessageService.addMessage(reqParams);
    }
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const getMessages = async (req, res) => {
  try {
    const message = await MessageService.getMessages();
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};

export const removeMessage = async (req, res) => {
  try {
    const message = await MessageService.removeMessage(req.params.id);
    res.json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
  }
};
