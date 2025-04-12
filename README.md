# VridhaMitra - Old Age Assistance Platform

## 📌 Overview
VridhaMitra is an all-in-one solution designed to address the challenges faced by aging populations, providing emergency response, daily health management, and community support through a single, intuitive app. The platform integrates features like SOS alerts, medication reminders, AI-powered fitness tracking, and volunteer-assisted services to enhance the quality of life for seniors and their caregivers.

---

## ✨ Key Features
- **Instant Emergency SOS**: One-tap panic button to alert nearby volunteers, family, and hospitals via GPS.
- **Pills Reminder**: Medication reminders, telehealth shortcuts, and booking for nurses/helpers.
- **AI-Powered Yoga Detection**: Camera-based posture tracking for yoga poses.
- **Crowdsourced Fundraising**: Verified requests for medical treatments with secure donation options.
- **Volunteer-Assisted Transportation**: Safe and assisted mobility for seniors with real-time volunteer matching.

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
- **Keypoints Detection**: MediaPipe
- **Libraries**: Numpy, Pandas, Matplotlib, OpenCV, Pickle
- **Models Used**: Logistic Regression on Image Keypoints
- **Backend**: using FastAPI

### APIs
- **Google Maps API**: For GPS and volunteer tracking
- **Payment Gateway**: Razorpay or Stripe for donations
- **Emergency Services**: Twilio for SMS/email alerts

---

## 📂 Repository Structure
- 📂 **VridhaMitra**
  - 📂 **frontend**
    - 📂 public
    - 📂 src
      - 📂 components
      - 📂 pages
      - 📂 utils
    - 📜 vite.config.js
  - 📂 **backend**
    - 📂 controllers
    - 📂 models
    - 📂 routes
  - **📂 ml**
    - 📂 yoga_pose
      - 📜 pose_detection.ipynb
  - 📜 README.md
---

## 🚀 Getting Started
### Prerequisites
- Node.js (v16+)
- Python (v3.8+ for ML)
- Firebase account (for backend services)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/07-priyanshu/VridhaMitra.git
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
---

## 🌟 Team

| Member                  | Role                     |
|-------------------------|--------------------------|
| **Priyanshu Ranjan**    | ML, APIs                 |
| **Shreya Srivastava**   | Frontend, Documentation  |
| **Saim Jawed**          | Backend, UI/UX           |
| **Devansh Pratap Singh**| Machine Learning,Testing |
---

## ✨ Screenshots
![image](https://github.com/user-attachments/assets/cb22828c-cdcd-4b76-babf-8cef36bba013)
![image](https://github.com/user-attachments/assets/71d2a2af-783b-4700-8711-f1d9fc169d4e)
![image](https://github.com/user-attachments/assets/4bcd5023-0ca0-415a-8f0f-6be6a77e78fa)


---
- Open-source libraries:  
  ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white)
  ![OpenCV](https://img.shields.io/badge/-OpenCV-5C3EE8?logo=opencv&logoColor=white)
