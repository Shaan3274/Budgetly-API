const AIPrompt = require("../models/AIPrompts")
const createPrompt=async(req,res)=>{
    try {
       const newPrompt=await AIPrompt.create({});
    } catch (error) {
        
    }
}
const deletePrompt=async(req,res)=>{
    try {
        const newPrompt=await AIPrompt.deleteOne({});
    } catch (error) {
        
    }
}
const fetchAllPrompts=async(req,res)=>{
    try {
        const allPrompts=await AIPrompt.find({});
    } catch (error) {
        
    }
}

module.exports={createPrompt,deletePrompt,fetchAllPrompts};