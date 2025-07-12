// const { GoogleGenerativeAI } = require('@google/generative-ai');
// require('dotenv').config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// const testGemini = async () => {
//   try {
//     const model = genAI.getGenerativeModel({ model: "models/gemini-pro" });

//     const result = await model.generateContent("What’s a smart way to save money this month?");
//     const response = await result.response;

//     console.log("Gemini Response:", response.text());
//   } catch (err) {
//     console.error("Gemini Error:", err);
//   }
// };

// testGemini();

require('dotenv').config();
import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
module.exports = genAI;
