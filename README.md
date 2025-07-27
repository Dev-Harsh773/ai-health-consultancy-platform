# 🧠 AI Health Consultancy Platform - Swasthya Saathi

A modern, full-stack MERN web application offering AI-powered health consultancy services, including personalized wellness reports, real-time chat with an AI assistant, and beautiful visual experiences.

## 🚀 Overview

This platform empowers users to:

- **Generate intelligent health reports** using the Groq AI API
- **Chat with an AI health assistant** in real-time
- **Track and download wellness reports** (PDF/TXT)
- **Calculate health metrics** like BMI and BMR
- **Enjoy a highly interactive glassmorphism UI** with WebGL backgrounds and GSAP animations

## 🌟 Features

| Category | Details |
|----------|---------|
| 🧠 **AI Integration** | Personalized wellness reports using Groq AI |
| 💬 **Interactive Chat** | Real-time messaging with an AI health assistant |
| 🔐 **Secure Auth** | JWT-based login with bcrypt password hashing |
| 📈 **Health Tools** | Live BMI, BMR, and other health metric calculators |
| 🧾 **Report Tools** | Download reports in PDF/TXT, view full history |
| 🎨 **Modern UI/UX** | Glassmorphism design, GSAP animations, WebGL interactions |
| 📱 **Responsive Design** | Mobile-first and desktop-ready design |

## 🧰 Tech Stack

### 🔗 Backend
- **Node.js**, **Express.js**
- **MongoDB Atlas**, **Mongoose**
- **JWT**, **bcryptjs**
- **Groq AI API**
- **jsPDF**

### 🎨 Frontend
- **React.js**, **Tailwind CSS**
- **GSAP**, **Framer Motion**
- **ogl** (WebGL)
- **React Router**, **React Hook Form**
- **Axios**

## 📦 Project Structure

```
ai-health-consultancy-platform/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   └── .env.example
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── utils/
│       └── App.js
├── README.md
└── .gitignore
```

## ⚙️ Installation & Setup

### ✅ Prerequisites
- **Node.js** (v14+)
- **npm** or **Yarn**
- **Git**

### 🔍 Step-by-Step Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-health-consultancy-platform.git
cd ai-health-consultancy-platform
```

#### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install
cp .env.example .env
```

## 🔐 Environment Variables

### 🔙 Backend .env
```env
MONGODB_URI=your_mongodb_connection_string
DB_NAME=ai_health_consultancy

JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key

PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 🔜 Frontend .env
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_NAME=AI Health Consultancy Platform
```

## 🔑 API Keys Setup

### 🧬 MongoDB Atlas
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster and get the connection string
3. Whitelist your IP and create a user
4. Replace `MONGODB_URI` with your connection string

### 🧠 Groq AI API
1. Sign up at [Groq Console](https://console.groq.com/)
2. Generate an API key
3. Add it to `GROQ_API_KEY` in .env

### 🔐 JWT Secret
Generate using:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

## 💻 Running the Application

### 🧪 Development Mode
```bash
# Start backend
cd backend
npm run dev

# Start frontend
cd ../frontend
npm start
```
- **Frontend** → http://localhost:3000
- **Backend** → http://localhost:5000

### 🏗 Production Mode
```bash
cd frontend
npm run build

cd ../backend
npm start
```

## 🌐 API Endpoints

### 🧑 Authentication
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive JWT

### 📄 Health Reports
- `POST /api/reports/generate` — Generate new AI report
- `GET /api/reports/history` — Retrieve report history
- `GET /api/reports/download/:id/:format` — Download report in PDF or TXT

### 💬 Chat System
- `POST /api/chat/message` — Send message to AI
- `GET /api/chat/history` — View full chat history

## 🎨 UI Components Highlights

| Component | Purpose |
|-----------|---------|
| **TextType** | Typing animation using GSAP |
| **RippleGrid** | WebGL-based interactive background |
| **ProfileDropdown** | User profile actions and logout |
| **DownloadModal** | Report format selector for downloading |
| **ChatInterface** | Real-time AI chat interface |

## 🔐 Security Measures

- **bcryptjs**: Secure password hashing
- **JWT**: Stateless authentication tokens
- **CORS**: Restricted API access to frontend
- **Environment Variables**: No hardcoded sensitive data
- **Middleware**: Route protection using token verification

## 🚀 Deployment Guide

### Suggested Platforms

| Component | Platform Suggestions |
|-----------|---------------------|
| **Backend** | Render, Railway, Heroku, DigitalOcean |
| **Frontend** | Vercel, Netlify, Render |
| **Database** | MongoDB Atlas (Cloud-native and free tier) |

Ensure production .env files are correctly configured, and MongoDB access IPs are allowed.

## 🤝 Contributing

Contributions are welcome! 🛠

```bash
# Steps to contribute:
1. Fork this repository
2. Create a feature branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add feature"
4. Push to the branch: git push origin feature/your-feature
5. Open a Pull Request 🚀
```

## 👤 Author

Harsh Shringi
- **GitHub**: [@Dev-Harsh773](https://github.com/Dev-Harsh773)
- **LinkedIn**: https://www.linkedin.com/in/harsh073/
- **Email**: krishringi123@gmail.com

## 🙏 Acknowledgments

- [Groq AI](https://groq.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [GSAP](https://greensock.com/gsap/)
- [Tailwind CSS](https://tailwindcss.com/)
