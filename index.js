const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();

// ─── MIDDLEWARE ─────────────────────────
app.use(cors());               // ✅ Allow all origins
app.use(express.json());       // ✅ Parse JSON requests

// ─── ROUTES ─────────────────────────────
app.get('/', (req, res) => {
  console.log(`[GET] ${req.url}`);
  res.send('🟢 Budgetly API is running!');
});

app.use('/api/auth', authRoutes); // ✅ Auth routes mounted AFTER middleware

// ─── SERVER LISTEN ─────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
