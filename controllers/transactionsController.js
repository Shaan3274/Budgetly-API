const Transaction = require("../models/Transaction");
const createTransaction=async(req,res)=>{
    try {
        const {type,transactionType,amount,note}=req.body;
        if(!type || !transactionType || !amount){
            return res.status(400).json({message:'Please fill in the required fields'});
        }
        const newTransaction=await Transaction.create({
            user:req?.userId,
            type:type,
            transactionType:transactionType,
            amount:Number(amount),
            note:note?note:''
        });
        return res.status(201).json({message:'Transaction Is created Successfully!!',transaction:newTransaction});
    } catch (error) {
        res.status(500).json({ message: "Error Creating Transaction",error:error });
    }
}
const editTransaction = async (req, res) => {
    try {
      const { id } = req.params;
      const { type, transactionType, amount, note } = req.body;
  
      const updated = await Transaction.findOneAndUpdate(
        { _id: id, user: req.userId }, // ensure only the user's transaction
        { type, transactionType, amount, note },
        { new: true } // return the updated document
      );
  
      if (!updated) {
        return res.status(404).json({ message: 'Transaction not found or unauthorized' });
      }
  
      res.status(200).json({ message: 'Transaction updated', transaction: updated });
    } catch (error) {
      console.error('Edit Transaction Error:', error);
      res.status(500).json({ message: 'Server error while updating transaction' });
    }
  };
  const deleteTransaction = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deleted = await Transaction.findOneAndDelete({
        _id: id,
        user: req.userId
      });
  
      if (!deleted) {
        return res.status(404).json({ message: 'Transaction not found or unauthorized' });
      }
  
      res.status(200).json({ message: 'Transaction deleted successfully' });
    } catch (error) {
      console.error('Delete Transaction Error:', error);
      res.status(500).json({ message: 'Server error while deleting transaction' });
    }
  };
const getAllTransactions=async(req,res)=>{
    try {
        console.log(req.userId);
        const transactions=await Transaction.find({user:req.userId});
        return res.status(200).json({message:'Transactions fetched Successfully!!',transactions:transactions.length>0?transactions:[]});
    } catch (error) {
        res.status(500).json({ message: "Error Fetching Transactions",error:error });
    }
}
const getTotalBalance = async (req, res) => {
    try {
      const transactions = await Transaction.find({ user: req.userId });
  
      let totalIncome = 0;
      let totalExpense = 0;
  
      transactions.forEach((t) => {
        if (t.transactionType === 'income') {
          totalIncome += t.amount;
        } else if (t.transactionType === 'expense') {
          totalExpense += t.amount;
        }
      });
  
      const balance = totalIncome - totalExpense;
  
      res.status(200).json({
        totalIncome,
        totalExpense,
        balance
      });
    } catch (error) {
      console.error('Balance error:', error);
      res.status(500).json({ message: 'Error fetching account balance', error });
    }
  };
module.exports={createTransaction,editTransaction,deleteTransaction,getAllTransactions,getTotalBalance};