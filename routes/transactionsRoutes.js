const express=require('express');
const { createTransaction, getAllTransactions, deleteTransaction, editTransaction, getTotalBalance } = require('../controllers/transactionsController');
const { verify } = require('jsonwebtoken');
const verifyJWT = require('../middleware/verifyJWT');
const router=express.Router();
router.post('/transactions',verifyJWT,createTransaction);
router.get('/transactions',verifyJWT,getAllTransactions);
router.delete('/transactions/:id',verifyJWT,deleteTransaction);
router.put('/transactions/:id',verifyJWT,editTransaction);
router.get('/balance',verifyJWT,getTotalBalance);
module.exports=router;