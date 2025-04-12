# VridhaMitra - Old Age Assistance Platform

## 📌 Overview
VridhaMitra is an all-in-one solution designed to address the challenges faced by aging populations, providing emergency response, daily health management, and community support through a single, intuitive app. The platform integrates features like SOS alerts, medication reminders, AI-powered fitness tracking, and volunteer-assisted services to enhance the quality of life for seniors and their caregivers.

---

## ✨ Key Features
- **Instant Emergency SOS**: One-tap panic button to alert nearby volunteers, family, and hospitals via GPS.
- **Health Hub**: Medication reminders, telehealth shortcuts, and booking for nurses/helpers.
- **AI-Powered Fitness Check**: Camera-based posture tracking for yoga and personalized wellness plans.
- **Crowdsourced Fundraising**: Verified requests for medical treatments with secure donation options.
- **Volunteer-Powered Transportation**: Safe and assisted mobility for seniors with real-time volunteer matching.

---

## 🛠️ Technology Stack
### Frontend
- **Framework**: React.js (with Vite for build tooling)
- **UI Libraries**: Material-UI or Tailwind CSS for responsive design
- **State Management**: Redux or Context API

### Backend
- **Server**: Node.js with Express.js
- **Database**: Firebase/Firestore or MongoDB for real-time data
- **Authentication**: Firebase Auth or JWT

### AI/ML
- **Posture Tracking**: Python with OpenCV and MediaPipe (Jupyter Notebook for prototyping)
- **Telehealth Integration**: WebRTC for video calls

### APIs
- **Google Maps API**: For GPS and volunteer tracking
- **Payment Gateway**: Razorpay or Stripe for donations
- **Emergency Services**: Twilio for SMS/email alerts

---

## 📂 Repository Structure
- **VridhaMitra/**
  - **frontend/**
    - public/
    - src/
      - components/
      - pages/
      - utils/
    - vite.config.js
  - **backend/**
    - controllers/
    - models/
    - routes/
  - **ml/**
    - yoga_pose/
      - pose_detection.ipynb
  - README.md
---

## 🚀 Getting Started
### Prerequisites
- Node.js (v16+)
- Python (v3.8+ for ML)
- Firebase account (for backend services)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/npm_install_bugs/VridhaMitra.git
   cd VridhaMitra

2. **Set up Frontend**:
   ```bash
   cd frontend
   npm install
   npm run dev

3. **Set up Backend**:
   ```bash
   cd ../backend
   npm install
   npm start

3. **Run ML Models**:
   ```bash
   pip install _______

