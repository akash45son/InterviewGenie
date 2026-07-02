# InterviewGenie – AI-Powered Interview Preparation Platform

An AI-powered interview preparation platform that helps job seekers analyze their resumes, identify missing skills, and generate personalized interview preparation plans based on a target job description.

Users can upload their resume (PDF) and paste a job description. The platform uses Google's Gemini AI to compare both, highlight skill gaps, generate tailored interview questions, and create a structured 7-day roadmap to improve interview readiness.

---

## 🚀 Live Demo

🔗 **Live Website:** https://interview-yt.vercel.app/

---

## 📌 Features

- 📄 Upload resumes in PDF format
- 🤖 AI-powered resume and job description analysis using Gemini AI
- 🎯 Generates 8–9 personalized interview questions
- 📅 Creates a customized 7-day interview preparation roadmap
- 📊 Identifies missing skills and provides resume improvement suggestions
- 🔐 Secure user authentication using JWT
- 💾 Stores user data and reports in MongoDB
- ⚡ Responsive React-based user interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- MongoDB Atlas

### Authentication
- JWT (JSON Web Token)

### AI
- Google Gemini AI API

### Other Tools
- Axios
- Multer (File Upload)
- PDF Parser
- Git & GitHub

---

## 📷 Screenshots

### Home Page
<img width="1530" height="714" alt="image" src="https://github.com/user-attachments/assets/21c4fd82-0830-4bd6-a8c2-23eba4ce26b9" />



### AI Analysis Report
<img width="1517" height="725" alt="image" src="https://github.com/user-attachments/assets/1d629c45-b36e-4d92-9406-e8f31c6f763d" />


### 7-Day Roadmap
<img width="1489" height="720" alt="image" src="https://github.com/user-attachments/assets/1e0053fb-d7f0-4f77-8c06-994388b61bd9" />

---

## 📂 Project Structure

```
InterviewGenie/
│
├── client/        # React Frontend
├── server/        # Node.js + Express Backend
├── uploads/       # Uploaded PDFs
├── README.md
└── package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/InterviewGenie.git
```

### 2. Navigate to the project

```bash
cd InterviewGenie
```

### 3. Install frontend dependencies

```bash
cd client
npm install
```

### 4. Install backend dependencies

```bash
cd ../server
npm install
```

### 5. Create a `.env` file

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

### 6. Run the backend

```bash
npm start
```

### 7. Run the frontend

```bash
cd ../client
npm start
```

The application should now be running locally.

---

## 🧠 How It Works

1. Register/Login securely.
2. Upload your resume (PDF).
3. Paste the target job description.
4. Gemini AI analyzes both documents.
5. The system identifies missing skills.
6. Generates personalized interview questions.
7. Creates a 7-day preparation roadmap.
8. Download or review the generated report.

---

## 📈 Future Improvements

- Mock interview with voice interaction
- AI interview scoring
- Resume ATS compatibility score
- Company-specific interview preparation
- Progress tracking dashboard
- Multiple resume versions

---

## 👨‍💻 Author

**Akash Sonawane**

LinkedIn: https://www.linkedin.com/in/akash-sonawane-8b4381223/

GitHub: https://github.com/akash45son/InterviewGenie

---

## 📄 License

This project is licensed under the MIT License.
