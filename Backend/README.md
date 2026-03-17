# Backend - YT-GenAI

Node.js/Express backend for the AI-powered interview strategy generator.

## 📁 Project Structure

```
src/
├── controllers/      # Request handlers
│   ├── auth.controller.js
│   └── interview.controller.js
├── models/          # MongoDB schemas
│   ├── user.model.js
│   ├── interviewReport.model.js
│   └── blacklist.models.js
├── routes/          # API endpoints
│   ├── auth.routes.js
│   └── interview.routes.js
├── middlewares/     # Custom middlewares
│   ├── auth.middleware.js
│   └── file.middleware.js
├── services/        # Business logic
│   └── ai.service.js
└── config/          # Configuration
    └── database.js
```

## 🚀 Installation

```bash
npm install
```

## 📋 Dependencies

### Core
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **dotenv**: Environment variables

### Authentication & Security
- **jsonwebtoken**: JWT tokens
- **bcrypt**: Password hashing
- **cookie-parser**: Cookie parsing
- **cors**: Cross-Origin Resource Sharing

### File & PDF Handling
- **multer**: File upload handling
- **pdf-parse**: PDF parsing
- **puppeteer**: PDF generation

### AI & Data Validation
- **@google/genai**: Google Generative AI API
- **zod**: Schema validation
- **zod-to-json-schema**: Zod to JSON schema conversion

## 🔑 Environment Variables

Create a `.env` file with the following variables:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET_KEY=your_jwt_secret_key
GOOGLE_GENAI_API_KEY=your_google_genai_api_key
```

## 🏃 Running the Server

### Development
```bash
npm run dev
```

Server runs on `http://localhost:3000`

### Production
```bash
node server.js
```

## 📚 API Endpoints

### Authentication Routes (`/api/auth`)

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

#### Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "string",
  "password": "string"
}
```

#### Logout User
```http
GET /api/auth/logout
```

#### Get Current User
```http
GET /api/auth/get-me
Authorization: Bearer <token>
```

### Interview Routes (`/api/interview`)

#### Generate Interview Report
```http
POST /api/interview/
Content-Type: multipart/form-data
Authorization: Bearer <token>

Form Data:
- jobDescription: string
- selfDescription: string (optional)
- resume: file (PDF/DOCX) (optional)
```

Response:
```json
{
  "message": "Interview report generated successfully.",
  "interviewReport": {
    "_id": "string",
    "matchScore": 85,
    "technicalQuestions": [...],
    "behavioralQuestions": [...],
    "skillGaps": [...],
    "preparationPlan": [...]
  }
}
```

#### Get All Interview Reports
```http
GET /api/interview/
Authorization: Bearer <token>
```

#### Get Specific Report
```http
GET /api/interview/report/:interviewId
Authorization: Bearer <token>
```

#### Download Resume PDF
```http
POST /api/interview/resume/pdf/:interviewReportId
Authorization: Bearer <token>
```

## 🔒 Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. User provides credentials to `/api/auth/login` or `/api/auth/register`
2. Server returns a JWT token in cookies
3. Client includes token in subsequent requests
4. Server validates token using auth middleware

Tokens expire after 1 day and can be blacklisted on logout.

## 📊 Database Models

### User
- `username` - Unique username
- `email` - Unique email address
- `password` - Bcrypt hashed password

### InterviewReport
- `user` - Reference to User
- `jobDescription` - Job description text
- `resume` - Parsed resume content
- `selfDescription` - Self description text
- `matchScore` - Match score (0-100)
- `technicalQuestions` - Array of technical questions
- `behavioralQuestions` - Array of behavioral questions
- `skillGaps` - Array of skill gaps with severity
- `preparationPlan` - 7-day preparation plan
- `title` - Job title/position
- `createdAt` - Timestamp

### BlacklistToken
- `token` - Blacklisted JWT token
- `createdAt` - Timestamp

## 🤖 AI Integration

The backend uses Google's Generative AI API to:

1. **Analyze Job Description**: Extract key requirements and skills
2. **Evaluate Resume/Profile**: Understand candidate's background
3. **Generate Questions**: Create relevant technical and behavioral questions
4. **Identify Gaps**: Determine skill gaps and their severity
5. **Create Roadmap**: Generate a 7-day preparation plan
6. **Generate Resume**: Create AI-optimized resume tailored to the job

## 📄 File Upload

Files are uploaded via Multipart Form Data:
- Supported formats: PDF, DOCX
- Max file size: 3MB
- Files are stored in memory (not persisted)

## 🛡️ Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Token blacklist for logout
- CORS configured for frontend origin
- Input validation using Zod schema
- Environment variables for sensitive data

## 🐛 Error Handling

All endpoints return appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad request
- `401` - Unauthorized
- `404` - Not found
- `500` - Server error

## 📝 Sample Usage

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'

# Generate Report
curl -X POST http://localhost:3000/api/interview/ \
  -H "Authorization: Bearer <token>" \
  -F "jobDescription=<job_description>" \
  -F "resume=@resume.pdf"
```

## 🚀 Deployment

### Prerequisites for Production
1. Use environment variables for all secrets
2. Set up MongoDB Atlas for database
3. Get Google Generative AI API key
4. Use HTTPS in production
5. Set strong JWT secret key
6. Configure CORS for your frontend domain

### Recommended Hosting
- **Railway**, **Render**, or **Heroku** for backend
- **Environment variables** should be set in hosting platform

## 🤝 Contributing

When contributing to the backend:
1. Follow the existing code structure
2. Add proper error handling
3. Validate all inputs with Zod
4. Add comments for complex logic
5. Test all endpoints before submitting PR

## 📞 Support

For issues or questions, please open a GitHub issue or contact the development team.
