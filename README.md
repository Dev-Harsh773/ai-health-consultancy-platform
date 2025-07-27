# AI Health Consultancy Platform

A sophisticated, full-stack MERN application that provides AI-generated health reports and a conversational chat assistant, featuring a modern, animated UI with a dynamic WebGL background.

![Demo Screenshot](demo.png) <!-- You can add a screenshot of your app here later and name it demo.png -->

## ✨ Core Features

*   **Secure User Authentication:** Full registration and login system using JWT for security.
*   **AI-Powered Reports:** Utilizes the Groq AI API to generate detailed, multi-section health & wellness reports based on user metrics.
*   **Interactive AI Chat:** A real-time, conversational chat interface where the AI uses the user's health data for personalized context.
*   **Full Data Persistence:** User accounts, reports, and chat history are stored securely in a MongoDB Atlas database.
*   **Report History & Downloads:** Browse and view all past reports, with the ability to download any report as a PDF or TXT file.
*   **Stunning Animated UI:** A modern, dark-themed UI built with Tailwind CSS, featuring smooth animations from Framer Motion and a signature "typing" effect from GSAP.
*   **Dynamic WebGL Background:** An interactive, continuously moving ripple grid background built with the `ogl` library that reacts to mouse movement.

## 🛠️ Tech Stack

*   **Frontend:** React, React Router, Axios, Tailwind CSS, Framer Motion, GSAP, OGL
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB with Mongoose
*   **AI:** Groq AI (Llama 3)
*   **Authentication:** JSON Web Tokens (JWT), bcryptjs

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js installed
*   npm or yarn installed
*   A MongoDB Atlas account (or a local MongoDB instance)
*   A free API key from [GroqCloud](https://console.groq.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/YOUR_USERNAME/ai-health-consultancy-platform.git
    cd ai-health-consultancy-platform
    ```

2.  **Setup the Backend:**
    ```sh
    cd backend
    npm install
    ```
    *   Create a `.env` file by copying the example:
        ```sh
        cp .env.example .env
        ```
    *   Open the new `.env` file and add your secret keys (MongoDB URI, JWT Secret, Groq API Key).

3.  **Setup the Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```
    *   The frontend is configured to connect to the backend at `http://localhost:5000`. No `.env` file is needed for local development.

4.  **Run the Application:**
    *   In one terminal, start the backend server (from the `backend` directory):
        ```sh
        npm start
        ```
    *   In a second terminal, start the frontend development server (from the `frontend` directory):
        ```sh
        npm start
        ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
