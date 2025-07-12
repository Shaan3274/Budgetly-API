const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const transactionsRoutes=require('./routes/transactionsRoutes')
const aiPromptRoutes=require('./routes/aiPromptRoutes')

const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// ─── MIDDLEWARE ─────────────────────────
app.use(cors());               // ✅ Allow all origins
app.use(express.json());       // ✅ Parse JSON requests
connectDB();
// ─── ROUTES ─────────────────────────────
app.get('/', (req, res) => {
  console.log(`[GET] ${req.url}`);
  res.send('🟢 Budgetly API is running!');
});

app.use('/api/auth', authRoutes); // ✅ Auth routes mounted AFTER middleware
app.use('/api', transactionsRoutes); // ✅ Auth routes mounted AFTER middleware
app.use('/api', aiPromptRoutes); // ✅ Auth routes mounted AFTER middleware



// ─── SERVER LISTEN ─────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
