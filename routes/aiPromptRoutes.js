const express=require('express');
const { fetchAllPrompts, createPrompt, deletePrompt } = require('../controllers/aiPromptsController');
const verifyJWT = require('../middleware/verifyJWT');
const router=express.Router();
router.get('/fetch-prompts',fetchAllPrompts);
router.post('/create-prompts',verifyJWT,createPrompt);
router.delete('/delete-prompts/:id',deletePrompt);
module.exports=router;