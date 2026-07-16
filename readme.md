# 🔗 URL Shortener - Full Stack Application

A complete URL shortening service built with the MERN stack (MongoDB, Express.js, React, Node.js). Shorten long URLs, track clicks, and manage your links with a beautiful modern interface.

![MERN Stack](https://img.shields.io/badge/MERN-Stack-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)
![Vite](https://img.shields.io/badge/Vite-4.x-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📋 Table of Contents

- [🚀 Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Installation](#️-installation)
- [🔧 Configuration](#-configuration)
- [🚀 Running the Application](#-running-the-application)
- [📡 API Endpoints](#-api-endpoints)
- [🎯 Frontend Routes](#-frontend-routes)
- [📊 Database Schema](#-database-schema)
- [🔒 Security Features](#-security-features)
- [📦 Dependencies](#-dependencies)
- [🤝 Contributing](#-contributing)

---

## 🚀 Features

### 🔗 URL Management
- ✅ Create Short URLs from Long URLs
- ✅ Redirect to Original URLs
- ✅ Track Click Counts
- ✅ Delete Short URLs
- ✅ Copy to Clipboard
- ✅ View All Shortened URLs

### 🎨 Frontend
- ✅ Modern, Responsive React UI
- ✅ Beautiful Gradient Design
- ✅ Toast Notifications
- ✅ Form Validation
- ✅ Loading States
- ✅ Hover Animations
- ✅ Copy to Clipboard Functionality
- ✅ Persistent Storage (LocalStorage)

### 🛡️ Security
- ✅ URL Validation
- ✅ CORS Configuration
- ✅ Error Handling
- ✅ Environment Variables

### 📊 Features
- ✅ Click Analytics per URL
- ✅ Creation Timestamps
- ✅ URL List with Stats
- ✅ Clean, Minimal Design

---

## 📸 Screenshots

### Home Page
![Home Page](./frontend/src/assets/url.png)

### URL Creation
![URL Creation](./frontend/src/assets/url2.png)

### URL List
![URL List](./frontend/src/assets/url2.png)

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| [Node.js](https://nodejs.org/) | JavaScript Runtime |
| [Express.js](https://expressjs.com/) | Web Framework |
| [MongoDB Atlas](https://www.mongodb.com/atlas) | Cloud Database |
| [Mongoose](https://mongoosejs.com/) | ODM for MongoDB |
| [nanoid](https://github.com/ai/nanoid) | Short Code Generator |
| [cors](https://www.npmjs.com/package/cors) | CORS Middleware |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment Variables |

### Frontend
| Technology | Purpose |
|------------|---------|
| [React](https://reactjs.org/) | UI Library |
| [Vite](https://vitejs.dev/) | Build Tool |
| [Axios](https://axios-http.com/) | HTTP Client |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons Library |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Notifications |
| [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling |

---

## 📁 Project Structure

```
url-shortener/
│
├── backend/                        # Backend Application
│   ├── config/
│   │   └── db.js                  # Database Connection
│   ├── models/
│   │   └── Url.js                # URL Schema
│   ├── controller/
│   │   └── url.controller.js     # Business Logic
│   ├── routes/
│   │   └── urlRoutes.js          # API Routes
│   ├── .env                       # Environment Variables
│   ├── package.json               # Backend Dependencies
│   └── server.js                  # Server Entry Point
│
├── frontend/                      # Frontend Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Navigation Bar
│   │   │   ├── UrlForm.jsx       # URL Input Form
│   │   │   ├── UrlList.jsx       # URL List Container
│   │   │   └── UrlCard.jsx       # Individual URL Card
│   │   ├── hooks/
│   │   │   └── useUrls.js        # Custom Hook for URL Logic
│   │   ├── services/
│   │   │   └── api.js            # API Service Layer
│   │   ├── App.jsx               # Main App Component
│   │   ├── App.css               # App Styles
│   │   ├── main.jsx              # Entry Point
│   │   └── index.css             # Global Styles
│   ├── .env                       # Environment Variables
│   ├── package.json               # Frontend Dependencies
│   ├── vite.config.js            # Vite Configuration
│   └── index.html                # HTML Template
│
├── .gitignore
└── README.md                      # Documentation
```

---

## ⚙️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository
```bash
git clone https://github.com/binishfaq/ShorternerUrl.git
cd ShorternerUrl
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 4: Create .env Files

**Backend `.env` (backend/.env)**
```env
# Server Configuration
PORT=5000

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener

# Or for local MongoDB
# MONGODB_URI=mongodb://localhost:27017/urlshortener
```

**Frontend `.env` (frontend/.env)**
```env
# API URL
VITE_API_URL=http://localhost:5000
```

---

## 🔧 Configuration

### MongoDB Setup

**Option 1: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Add it to `MONGODB_URI` in `.env`

**Option 2: Local MongoDB**
1. [Install MongoDB](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use `mongodb://localhost:27017/urlshortener`

### Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |

---

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Server will run on: `http://localhost:5000`

### Start Frontend Application
```bash
cd frontend
npm run dev
```
App will run on: `http://localhost:5173`

### Production Build
```bash
cd frontend
npm run build
```

---

## 📡 API Endpoints

### URL Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/testurl` | Create short URL |
| `GET` | `/:code` | Redirect to original URL |
| `DELETE` | `/:code` | Delete short URL |

### Request/Response Examples

**Create Short URL**
```http
POST /testurl
Content-Type: application/json
```
**Request Body:**
```json
{
  "originalUrl": "https://www.example.com/very/long/url"
}
```
**Response:**
```json
{
  "message": "✅ New URL created successfully!",
  "data": {
    "originalUrl": "https://www.example.com/very/long/url",
    "shortCode": "abc123",
    "shortUrl": "http://localhost:5000/abc123",
    "clicks": 0,
    "_id": "...",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Redirect to Original URL**
```http
GET /abc123
```
**Response:** Redirects to `https://www.example.com/very/long/url`

**Delete URL**
```http
DELETE /abc123
```
**Response:**
```json
{
  "message": "✅ Delete successfully!",
  "deleted": {
    "originalUrl": "https://www.example.com/very/long/url",
    "shortCode": "abc123"
  }
}
```

---

## 🎯 Frontend Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | App | Main URL Shortener Interface |

---

## 📊 Database Schema

### URL Model

```javascript
const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  clicks: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

### Example Document
```json
{
  "_id": ObjectId("6a548543c5e19d15e39fe8ff"),
  "originalUrl": "https://www.google.com",
  "shortCode": "abc123",
  "clicks": 42,
  "createdAt": ISODate("2024-01-15T10:30:00.000Z"),
  "__v": 0
}
```

---

## 🔒 Security Features

### Implemented Security Measures
- ✅ URL Validation (client & server)
- ✅ CORS Configuration
- ✅ Environment Variables for Secrets
- ✅ Input Sanitization
- ✅ Error Handling

### Best Practices
- ✅ Never expose secrets in code
- ✅ Use HTTPS in production
- ✅ Validate all user inputs
- ✅ Proper error messages
- ✅ Clean, maintainable code

---

## 📦 Dependencies

### Backend Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.0.0",
    "dotenv": "^16.0.0",
    "cors": "^2.8.5",
    "nanoid": "^4.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

### Frontend Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "axios": "^1.6.0",
    "react-icons": "^4.11.0",
    "react-toastify": "^9.1.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9"
  }
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open** a Pull Request

### Guidelines
- Follow existing code style
- Write meaningful commit messages
- Update documentation
- Test your changes

---

## 👨‍💻 Connect

- **GitHub:** [binishfaq](https://github.com/binishfaq)
- **LinkedIn:** [yourprofile](https://www.linkedin.com/in/zainbinishfaq)
- **Website:** [yourwebsite.com](https://zainbinishfaq.vercel.app/)

---

## 🙏 Acknowledgments

- [nanoid](https://github.com/ai/nanoid) - Short code generation
- [MongoDB Atlas](https://www.mongodb.com/atlas) - Cloud database
- [Express.js](https://expressjs.com/) - Web framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icons
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Notifications

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ by [Zain Bin Ishfaq]**

---

## 🏷️ Tags

```
URL Shortener, Node.js, Express, MongoDB, React, Vite, MERN, REST API, Full Stack
```

---

## 📝 Quick Links

- [GitHub Repository](https://github.com/binishfaq/ShorternerUrl)
- [Issue Tracker](https://github.com/binishfaq/ShorternerUrl/issues)
