const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  type: {
    type: String,
    enum: [
      'Groceries',
      'Rent',
      'Transport',
      'Entertainment',
      'Health',
      'Education',
      'Utilities',
      'Clothing',
      'Dining',
      'Subscriptions',
      'Savings',
      'Gifts',
      'Other'
    ],
    required: true
  },
  transactionType: {
    type: String,
    enum: ['income', 'expense'],
    required: true
  },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  note: { type: String }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
