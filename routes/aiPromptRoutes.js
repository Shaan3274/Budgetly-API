const express=require('express');
const { fetchAllPrompts, createPrompt, deletePrompt } = require('../controllers/aiPromptsController');
const router=express.Router();
router.get('/fetch-prompts',fetchAllPrompts);
router.post('/create-prompts',createPrompt);
router.delete('/delete-prompts/:id',deletePrompt);
module.exports=router;