const express = require('express');
const router = express.Router();
const Keystroke = require('../models/KeyStroke');


router.post('/', async (req, res) => {
  try {
    const { user_id, pattern } = req.body;

    const newKeystroke = await Keystroke.create({
      user_id,
      pattern
    });

    res.status(201).json({ message: 'Keystroke data saved!', data: newKeystroke });
  } catch (error) {
    console.error('Error saving keystroke:', error);
    res.status(500).json({ message: 'Failed to save keystroke' });
  }
});
router.get('/keystroke/:userId', async(req, res) => {
  const { userId } = req.params;
  
  console.log(`Fetching keystrokes for user: ${userId}`);
  const newKeystroke = await Keystroke.findAll({ where: { user_id: userId },});
  const userKeystrokes = newKeystroke;

  if (!userKeystrokes) {
    return res.status(404).json({ message: 'Keystrokes not found for this user' });
  }

  res.json(userKeystrokes);
});
module.exports = router;
