# 🔗 URL Shortener API

A complete URL shortener backend built with **Node.js**, **Express**, and **MongoDB Atlas**.

---

## ✨ Features

| Feature | Method | Endpoint | Description |
|---------|--------|----------|-------------|
| Create Short URL | `POST` | `/testurl` | Convert long URL to short code |
| Redirect to Original | `GET` | `/:code` | Redirect to original URL |
| Track Clicks | `GET` | `/:code` | Auto-increment click counter |
| Delete URL | `DELETE` | `/:code` | Remove short URL |

---

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM for MongoDB
- **nanoid** - Unique code generator
- **Postman** - API testing

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/binishfaq/ShorternerUrl
cd url-shortener/backend
npm install
```

### 2. Setup Environment

Create `.env` file:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/urlshortener
```

### 3. Start Server

```bash
npm run dev
```

**Server runs on:** `http://localhost:5000`

---

## 📡 API Endpoints

### Create Short URL

```http
POST /testurl
Content-Type: application/json
```

**Request:**
```json
{
  "originalUrl": "https://www.google.com"
}
```

**Response:**
```json
{
  "message": "✅ New URL created successfully!",
  "data": {
    "originalUrl": "https://www.google.com",
    "shortCode": "abc123",
    "shortUrl": "http://localhost:5000/abc123",
    "clicks": 0
  }
}
```

---

### Redirect to Original

```http
GET /:code
```

**Example:** `http://localhost:5000/abc123`
- ✅ Redirects to original URL
- ✅ Auto-increments click count

---

### Delete URL

```http
DELETE /:code
```

**Example:** `DELETE http://localhost:5000/abc123`

**Response:**
```json
{
  "message": "✅ Delete successfully!",
  "deleted": {
    "originalUrl": "https://www.google.com",
    "shortCode": "abc123"
  }
}
```

---

## 📊 Database Schema

```javascript
{
  originalUrl: String,
  shortCode: String (unique),
  clicks: Number (default: 0),
  createdAt: Date (auto)
}
```

---

## 🧪 Testing with Postman

### 1. Create URL
```
POST http://localhost:5000/testurl
Body: { "originalUrl": "https://www.google.com" }
```

### 2. Visit Short URL
```
GET http://localhost:5000/abc123
```

### 3. Delete URL
```
DELETE http://localhost:5000/abc123
```

---

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── models/
│   └── url.model.js             # URL schema
├── controller/
│   └── url.controller.js  # Business logic
├── .env                   # Environment variables
├── package.json           # Dependencies
└── server.js              # Entry point
```

---

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "dotenv": "^16.0.0",
  "cors": "^2.8.5",
  "nanoid": "^4.0.0",
  "nodemon": "^2.0.0"
}
```

---

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/urlshortener` |

---

## 📈 Future Improvements

- [ ] React frontend
- [ ] User authentication
- [ ] Custom short codes
- [ ] QR code generation
- [ ] Analytics dashboard

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## 📝 License

**MIT License** - Free to use and modify.

---

## ⭐ Support

If you found this helpful, please give it a ⭐ on GitHub!

---

**Built with ❤️ by Zain bin ishfaq
