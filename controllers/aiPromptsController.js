const AIPrompt = require("../models/AIPrompts")
const genAI = require('../utils/geminiClient');
const Transaction = require('../models/Transaction');


const createPrompt = async (req, res) => {
  try {
    const { userInput } = req.body; // typed question or faq label

    if (!userInput || userInput.trim() === '') {
      return res.status(400).json({ message: "User input is required" });
    }

    // ⏱️ Optional: last 30 days filter
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const transactions = await Transaction.find({
      user: req.userId,
      date: { $gte: thirtyDaysAgo }
    });

    if (transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found" });
    }

    // 📄 Format transaction data
    const formatted = transactions.map(t =>
      `${t.transactionType.toUpperCase()}: ${t.type} - £${t.amount} (${t.note || 'no note'})`
    ).join('\n');

    // 🧠 Combine user question + transaction context
    const prompt = `
You are a smart financial assistant. The user asked:

"${userInput}"

Here is the user's recent spending activity:

${formatted}

Based on the question and the data, provide a helpful financial insight. If the question is vague, still offer a useful summary or savings tip.
    `.trim();
    console.log("prompt:",prompt);
    // 🤖 Call Gemini
    const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiResponse = response.text();

    // 💾 Save to DB
    const savedPrompt = await AIPrompt.create({
      user: req.userId,
      question: userInput,
      aiResponse,
      context: "ai-chat"
    });

    res.status(200).json({
      message: "AI insight generated",
      insight: aiResponse,
      promptId: savedPrompt._id
    });

  } catch (error) {
    console.error("createPrompt error:", error);
    res.status(500).json({ message: "Failed to generate prompt", error });
  }
};

module.exports = { createPrompt };

const generateInsightWithGemini = async (req, res) => {
    try {
      const { transactions } = req.body;
  
      const formatted = transactions.map(t =>
        `${t.transactionType.toUpperCase()}: ${t.type} - £${t.amount} (${t.note || 'no note'})`
      ).join('\n');
  
      const prompt = `
  You are a financial assistant. Based on the following transactions, summarize the user's spending, highlight any problem areas, and offer 1 personalized savings tip:\n\n${formatted}
  `;
  
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
  
      res.status(200).json({ insight: text });
    } catch (error) {
      console.error("Gemini AI Error:", error);
      res.status(500).json({ message: "Failed to generate AI insight", error });
    }
  };
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