const mongoose = require('mongoose');

const aiPromptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: String,
    required: true
  },
  aiResponse: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  context: {
    type: String, // optional field for tagging (e.g. 'monthlySummary', 'savingsTips')
    default: 'general'
  }
});

const AIPrompt = mongoose.model('AIPrompt', aiPromptSchema);
module.exports = AIPrompt;
