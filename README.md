# 🕉️ MahaKumbh 2025 — Real-Time Crowd Management System  
### MERN Stack + Google Maps + AI Crowd Counting (VGG19) + Image Analysis  

A full-stack AI-powered platform built to help authorities visualize, monitor, and analyze the crowd density during MahaKumbh 2025. The system provides real-time crowd analytics, heatmaps, image-based crowd counting, route planning, traffic insights, and an administrative dashboard.

---

## 🚀 Features

### 🔹 1. Real-Time Crowd Monitoring
- Google Maps integration  
- Live crowd heatmaps  
- Zone-wise density  
- Geofencing + alerts  

### 🔹 2. AI Crowd Counting (VGG19)
- Upload multiple images  
- Deep learning model predicts total crowd count  
- Fast inference using Flask API  
- Supports JPG/PNG  

### 🔹 3. Crowd Analysis Dashboard
- Recharts visual graphs  
- Zone-wise density scale  
- Time-based analytics  
- Live notifications  

### 🔹 4. Image Upload + Auto Slider
- Upload multiple images  
- Auto sliding gallery  
- Clean UI with Tailwind & Framer Motion  

### 🔹 5. Route & Traffic Integration
- Google Maps Directions API  
- Live Traffic layer  
- Recommended safe routes  

### 🔹 6. Admin Panel
- Manage crowd zones  
- Upload/Delete images  
- Real-time statistics  

---

## 🏗️ Tech Stack

### Frontend
- React.js (Vite)  
- Tailwind CSS  
- Framer Motion  
- Recharts  
- Google Maps API  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- JWT Auth  

### AI Model
- PyTorch  
- VGG19 Crowd Density Model  
- Flask API  

---

## 📁 Folder Structure
MahaKumbh2025/
│── client/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
│
│── server/
│ ├── routes/
│ ├── models/
│ ├── controllers/
│ ├── config/
│ └── server.js
│
│── ai-server/
│ ├── model/
│ ├── app.py
│ └── utils.py
│
└── README.md

---

## ⚙️ Installation

### 1. Clone Project
```bash
git clone https://github.com/yourusername/MahaKumbh2025.git
cd MahaKumbh2025
cd client
npm install
npm run dev
cd server
npm install
npm start
cd ai-server
pip install -r requirements.txt
python app.py
POST /api/upload
POST /ai/predict
GET /api/zones
GET /api/routes?source=a&dest=b

---
## 🚀 Future Upgrades

- 🔥 **AI Hashtag Generator**  
- ✍️ **AI Caption Maker**  
- 📊 **Content Quality Score (out of 10)**  
- 🌍 **Multi-Language OCR Support**  
- 💾 **Save & View Analysis History**  
- 📈 **Smarter Insights with Trend Tracking**  

---

## 👤 Developed By

**Shubham**  
_MERN • AI • Full-Stack Developer_  


