# 🔗 ShortLinker - URL Shortener Service

<div align="center">

![ShortLinker Logo](https://img.shields.io/badge/ShortLinker-URL%20Shortener-blue?style=for-the-badge&logo=link)

**A powerful and efficient URL shortening service built with the MERN stack**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-black?style=flat&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.18.1-green?style=flat&logo=mongodb)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat)](LICENSE)

[🚀 Live Demo](https://shortlinker-jves.onrender.com/) | [📖 Documentation](https://shortlinker-jves.onrender.com/) | [🐛 Report Bug](https://github.com/Ashukr321/ShortLinker/issues) | [✨ Request Feature](https://github.com/Ashukr321/ShortLinker/issues)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [📚 API Documentation](#-api-documentation)
- [📋 Project Requirements](#-project-requirements)
- [🔧 Configuration](#-configuration)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

---

## ✨ Features

- 🔗 **URL Shortening**: Convert long URLs into short, shareable links
- ⚡ **Fast & Reliable**: Built with Express.js for high performance
- 🗄️ **MongoDB Storage**: Scalable database solution for URL management
- 🎯 **Unique Short Codes**: Generate unique 8-character short codes using nanoid
- 🔄 **Automatic Redirects**: Seamless redirection to original URLs
- 📊 **Analytics Ready**: Built with analytics in mind for future enhancements
- 🛡️ **Error Handling**: Comprehensive error handling and validation
- 🌐 **CORS Enabled**: Cross-origin resource sharing for web applications
- 📱 **RESTful API**: Clean and intuitive API endpoints

---

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB 8.18.1
- **ODM**: Mongoose
- **ID Generation**: nanoid 5.1.5
- **Environment**: dotenv 17.2.1
- **CORS**: cors 2.8.5

### Development Tools
- **Process Manager**: nodemon 3.1.10
- **TypeScript Support**: @types/express, @types/cors

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ashukr321/ShortLinker.git
   cd ShortLinker
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in backend directory
   touch .env
   ```
   
   Add the following environment variables:
   ```env
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/shortlinker
   NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Start the production server**
   ```bash
   npm start
   ```

The server will start on `http://localhost:8080`

---

## 📁 Project Structure

```
ShortLinker/
├── 📁 .git/ 🚫 (auto-hidden)
├── 📁 backend/
│   ├── 📁 node_modules/ 🚫 (auto-hidden)
│   ├── 📁 src/
│   │   ├── 📁 config/
│   │   │   ├── 📄 connectDb.js          # Database connection
│   │   │   └── 📄 envConfig.js          # Environment configuration
│   │   ├── 📁 middleware/
│   │   │   └── 📄 globalErrorHandler.js # Global error handling
│   │   ├── 📁 modules/
│   │   │   └── 📁 url/
│   │   │       ├── 📄 url.controllers.js # URL controllers
│   │   │       ├── 📄 url.model.js       # URL data model
│   │   │       └── 📄 url.routes.js      # URL routes
│   │   └── 📄 index.js                   # Express app configuration
│   ├── 🔒 .env 🚫 (auto-hidden)
│   ├── 📄 app.js                         # Application entry point
│   ├── 📄 package-lock.json
│   └── 📄 package.json
├── 📁 node_modules/ 🚫 (auto-hidden)
├── 📁 project-requirements/
│   ├── 📝 api_list.md
│   ├── 📝 build_phase.md
│   ├── 📝 ci_cd_pipeline.md
│   ├── 📝 data_model.md
│   ├── 📝 docker.md
│   ├── 📝 feature_checklit.md
│   ├── 📕 product.dfd.pdf
│   ├── 📕 url_shortener.pdf
│   └── 📝 user_stories.md
├── 🚫 .gitignore
├── 📖 README.MD
├── 📄 package-lock.json
└── 📄 package.json
```

---

## 📚 API Documentation

### Base URL
```
http://localhost:8080/api/v1
```

### Endpoints

#### 1. Create Short URL
**POST** `/shorten`

Creates a shortened URL from the provided original URL.

**Request Body:**
```json
{
  "originalUrl": "https://example.com/very/long/url/here"
}
```

**Response:**
```json
{
  "message": "Short URL created successfully",
  "data": "http://localhost:8080/api/v1/abc12345"
}
```

**Error Responses:**
- `400` - Missing originalUrl
- `500` - Internal server error

#### 2. Redirect to Original URL
**GET** `/:shortCode`

Redirects to the original URL using the short code.

**Parameters:**
- `shortCode` (string) - The 8-character short code

**Response:**
- `302` - Redirect to original URL
- `404` - Short URL not found

#### 3. API Information
**GET** `/`

Returns API information and available endpoints.

**Response:**
```json
{
  "message": "Welcome to the URL Shortener API 🚀",
  "endpoints": {
    "POST /api/v1/shorten": "Create a shortened URL",
    "GET /:shortCode": "Redirect to original URL using shortCode"
  }
}
```

### Example Usage

```bash
# Create a short URL
curl -X POST http://localhost:8080/api/v1/shorten \
  -H "Content-Type: application/json" \
  -d '{"originalUrl": "https://github.com/Ashukr321/ShortLinker"}'

# Access the short URL (will redirect)
curl -L http://localhost:8080/api/v1/abc12345
```

---

## 📋 Project Requirements

This project includes comprehensive documentation and requirements files located in the `project-requirements/` directory:

### 📄 Documentation Files

| File | Description | Status |
|------|-------------|--------|
| 📝 [`api_list.md`](project-requirements/api_list.md) | Complete API endpoint documentation | 📋 Ready |
| 📝 [`build_phase.md`](project-requirements/build_phase.md) | Development phases and milestones | 📋 Ready |
| 📝 [`ci_cd_pipeline.md`](project-requirements/ci_cd_pipeline.md) | Continuous Integration/Deployment setup | 📋 Ready |
| 📝 [`data_model.md`](project-requirements/data_model.md) | Database schema and data modeling | 📋 Ready |
| 📝 [`docker.md`](project-requirements/docker.md) | Docker containerization configuration | 📋 Ready |
| 📝 [`feature_checklit.md`](project-requirements/feature_checklit.md) | Feature implementation checklist | 📋 Ready |
| 📝 [`user_stories.md`](project-requirements/user_stories.md) | User stories and requirements | 📋 Ready |

### 📕 Design Documents

| File | Description | Type |
|------|-------------|------|
| 📕 [`product.dfd.pdf`](project-requirements/product.dfd.pdf) | Product Data Flow Diagram | PDF |
| 📕 [`url_shortener.pdf`](project-requirements/url_shortener.pdf) | Complete project specification document | PDF |

### 🗂️ File Structure

```
project-requirements/
├── 📝 api_list.md              # API endpoints and specifications
├── 📝 build_phase.md           # Development phases breakdown
├── 📝 ci_cd_pipeline.md        # CI/CD pipeline configuration
├── 📝 data_model.md            # Database schema documentation
├── 📝 docker.md                # Docker setup and configuration
├── 📝 feature_checklit.md      # Feature implementation tracking
├── 📝 user_stories.md          # User requirements and stories
├── 📕 product.dfd.pdf          # Product data flow diagram
└── 📕 url_shortener.pdf        # Main project specification
```

### 📖 How to Use

1. **For Developers**: Start with `url_shortener.pdf` for complete project overview
2. **For API Integration**: Refer to `api_list.md` for endpoint documentation
3. **For Deployment**: Check `docker.md` and `ci_cd_pipeline.md`
4. **For Database Setup**: Review `data_model.md` for schema details
5. **For Feature Tracking**: Use `feature_checklit.md` to track progress

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | `8080` | No |
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `NODE_ENV` | Environment mode | `development` | No |

### Database Schema

```javascript
{
  originalUrl: String,    // The original long URL
  shortCode: String,      // Unique 8-character short code
  shortUrl: String,       // Complete short URL
  createdAt: Date,        // Creation timestamp
  updatedAt: Date         // Last update timestamp
}
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

### **Ashutosh Kumar**
*Full Stack Developer | MERN Stack Specialist*

[![GitHub](https://img.shields.io/badge/GitHub-Ashukr321-black?style=for-the-badge&logo=github)](https://github.com/Ashukr321)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-ashukr321-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ashukr321/)
[![Portfolio](https://img.shields.io/badge/Portfolio-ashukr321.com-purple?style=for-the-badge&logo=portfolio)](https://ashukr321-ashutosh-kumars-projects-cb5d9ae8.vercel.app/)

</div>




<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Ashutosh Kumar](https://github.com/Ashukr321)
</div>
