# 💼 Budgetly API

> Backend server for the **Budgetly** personal finance app — track expenses, incomes, and get AI-powered spending insights. Built with **Node.js**, **Express**, **MongoDB**, and **OpenAI API**.

---

## 🚀 Features

* 🔐 JWT Authentication (Register/Login)
* 💸 Track income and expenses in one schema
* 📊 AI-generated budget insights and savings suggestions
* 🧠 Logs all user AI queries for future reference
* 🧾 REST API with clean endpoints
* 🌐 CORS and environment-based config

---

## 🧱 Tech Stack

| Layer      | Tool                 |
| ---------- | -------------------- |
| Server     | Node.js + Express.js |
| Auth       | JWT                  |
| Database   | MongoDB + Mongoose   |
| AI Engine  | OpenAI API           |
| Middleware | CORS, dotenv         |

---

## 📁 Folder Structure

```
/budgetly-api
├── index.js
├── package.json
├── .env
├── /routes
│   └── authRoutes.js
│   └── transactionsRoutes.js
│   └── aiPromptRoutes.js
├── /controllers
│   └── authController.js
│   └── transactionsController.js
│   └── aiPromptsController.js
├── /middleware
│   └── verifyJWT.js
├── /models
│   └── User.js
│   └── Transaction.js
│   └── AIPrompt.js
```

---

## 🧪 API Endpoints

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/register`      | Register a new user     |
| POST   | `/api/login`         | Login and get token     |
| GET    | `/api/transactions`  | Get user's transactions |
| POST   | `/api/transactions`  | Add new income/expense  |
| PUT    | `/api/transactions`  | Edit income/expense     |
| POST   | `/api/ai/generate`   | Get AI insight response |

---

## ⚙️ Environment Variables

Create a `.env` file in the root with the following:

```
PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_very_secure_jwt_secret
OPENAI_API_KEY=sk-xxxxxx
```

---

## ▶️ Running the Project

```bash
npm install
npm run dev
```

Make sure MongoDB is running locally or provide a MongoDB Atlas URI.

---

## 🔐 JWT Auth Middleware

This backend uses JWT for protected routes. Send the token in headers like so:

```http
Authorization: Bearer <your-token>
```

---

## 📌 Roadmap

* [x] Auth & basic transactions
* [x] AI integration (OpenAI)
* [ ] Budget summaries by month
* [ ] Expense category analytics
* [ ] Email reports (SendGrid)
* [ ] Push notifications (via Firebase FCM)

---

## 🤝 License

MIT — feel free to fork, learn, and build your own budget tracker!

---

## 🧠 Author

**Shan Ayub** — [LinkedIn](https://www.linkedin.com/in/shan-ayub-063747235/)

For full project UI & wireframes, see the frontend repo: [budgetly-app](https://github.com/yourusername/budgetly-app)
