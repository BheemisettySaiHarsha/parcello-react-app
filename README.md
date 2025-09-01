# 🍕 Parcello - Modern Food Delivery Platform

<div align="center">
  <img src="https://raw.githubusercontent.com/BheemisettySaiHarsha/mlproject/main/parcello.jpg" alt="Parcello Logo" width="120" height="120" />
  <p><strong>A full-stack food delivery application built with React and Node.js</strong></p>
  <a href="https://parcello-react-app.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge" alt="Live Demo" />
  </a>
  <a href="https://github.com/BheemisettySaiHarsha/parcello-react-app">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
</div>

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📱 Usage](#-usage)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

---

## 🎯 Overview

**Parcello** is a modern, responsive food delivery platform that connects hungry customers with their favorite restaurants. Built with cutting-edge web technologies, it offers a seamless experience for browsing menus, placing orders, and managing deliveries.

### 🌟 Key Highlights

- **🎨 Modern UI/UX:** Clean, intuitive design with smooth animations
- **📱 Fully Responsive:** Perfect experience across all devices
- **⚡ Lightning Fast:** Optimized performance with lazy loading
- **🔐 Secure:** JWT authentication and secure payment processing
- **🛒 Smart Cart:** Persistent cart with real-time updates

---

## ✨ Features

### 🍽️ Core Functionality

- **Restaurant Discovery:** Browse restaurants by location and cuisine
- **Dynamic Menu:** Real-time menu updates with rich food imagery
- **Smart Search:** Filter restaurants by rating, delivery time, and price
- **Shopping Cart:** Add, remove, and modify orders seamlessly

### 👤 User Management

- **Authentication System:** Secure login/logout with demo credentials
- **User Profiles:** Personalized experience with order history
- **Guest Checkout:** Quick ordering without mandatory registration

### 💳 Payment & Orders

- **Multiple Payment Options:** Integrated with Razorpay for secure payments
- **Order Tracking:** Real-time order status updates
- **Order History:** View past orders and reorder favorites

### 📄 Additional Pages

- **Legal Compliance:** Terms of Service, Privacy Policy
- **Company Information:** About Us, Life at Parcello
- **Customer Support:** Contact forms and help sections

### 🔧 Technical Features

- **Offline Support:** Works even with poor connectivity
- **SEO Optimized:** Server-side rendering for better search visibility
- **Error Handling:** Graceful error management with user-friendly messages
- **Performance Monitoring:** Real-time performance tracking

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 18+ with Hooks
- **Bundler:** Parcel (Fast, zero-configuration)
- **Routing:** React Router v6 with lazy loading
- **State Management:** Redux Toolkit + React Context API
- **Styling:** Tailwind CSS with custom components
- **Icons:** React Icons library

### Backend

- **Runtime:** Node.js 18+
- **Framework:** Express.js with middleware
- **HTTP Client:** Axios for API calls
- **CORS:** Configured for cross-origin requests
- **Environment:** dotenv for configuration

### DevOps & Deployment

- **Frontend Hosting:** Vercel (Automatic deployments)
- **Backend Hosting:** Render (Serverless functions)
- **Version Control:** Git with GitHub
- **Package Manager:** npm

### Third-Party Integrations

- **Payment Processing:** Razorpay Gateway
- **Restaurant Data:** Swiggy API (Proxied through backend)
- **Maps:** Location services integration

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

---

### 1️⃣ Clone the Repositories

```bash
# Clone frontend (React app)
git clone https://github.com/BheemisettySaiHarsha/parcello-react-app.git
cd parcello-react-app

# Clone backend (Node.js server)
git clone https://github.com/BheemisettySaiHarsha/parcello-server.git
cd parcello-server
```

---

### 2️⃣ Install Dependencies

```bash
# Frontend
cd parcello-react-app
npm install

# Backend
cd parcello-server
npm install
```

---

### 3️⃣ Configure Environment Variables

#### 🔹 Frontend (`.env.local`)

Create a `.env.local` file inside `parcello-react-app/` and add:

```env
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_ENV=development
```

#### 🔹 Backend (`.env`)

Create a `.env` file inside `parcello-server/` and add:

```env
PORT=5000
NODE_ENV=development
```

---

### 4️⃣ Start Development Servers

```bash
# Terminal 1 - Backend
cd parcello-server
npm run dev

# Terminal 2 - Frontend
cd parcello-react-app
npm start
```

---

### ✅ Success!

Your app should now be running at:

- 🌐 Frontend: [http://localhost:1234](http://localhost:1234)
- ⚙️ Backend: [http://localhost:5000](http://localhost:5000)

✨ That’s it! You’re ready to start developing with **Parcello**.

---

## 📱 Usage

### 🔑 Demo Credentials

- **Email:** demo@parcello.com
- **Password:** demo123

### 🎯 Getting Started Guide

1. **🏠 Browse Restaurants**
   - Visit the homepage to see available restaurants
   - Use filters to find restaurants by cuisine or rating
2. **🍽️ Explore Menus**
   - Click on any restaurant to view their menu
   - Browse categories and read item descriptions
3. **🛒 Add to Cart**
   - Click "Add to Cart" for items you want to order
   - View cart summary in the header
4. **👤 Login (Optional)**
   - Use demo credentials for a personalized experience
   - Access order history and faster checkout
5. **💳 Checkout**
   - Review your order and delivery details
   - Choose between demo payment or Razorpay
   - Track your order status

### 🧭 Navigation Guide

- **Home:** Browse restaurants and featured items
- **About:** Learn about Parcello's mission and values
- **Contact:** Get in touch with customer support
- **Cart:** Review and modify your orders
- **Profile:** Manage account settings (when logged in)

---

## 🌐 Deployment

### 🔴 Live Applications

- **🌍 Frontend:** [https://parcello-food-delivery.vercel.app](https://your-app.vercel.app)
- **⚡ Backend API:** [https://parcello-server.onrender.com](https://your-server.onrender.com)

---

### 🚀 Deploy Your Own

#### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set build settings:
   - **Framework:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add environment variables
5. Deploy!

#### Backend (Render)

1. Push server code to GitHub
2. Create Web Service on Render
3. Configure settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Set environment variables
5. Deploy!

---




## 🤝 Contributing

We love contributions! Here's how you can help make Parcello even better:

### 🐛 Bug Reports

1. Check existing issues first
2. Create detailed bug reports with steps to reproduce
3. Include screenshots if applicable

### 💡 Feature Requests

1. Open an issue with the "enhancement" label
2. Describe the feature and its benefits
3. Discuss implementation approaches

### 🔧 Code Contributions

#### Development Workflow

```bash
# Fork the repository
git checkout -b feature/amazing-feature

# Make your changes
git add .
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature
```

Then open a Pull Request.

#### Code Standards

- **ESLint:** Follow the established linting rules
- **Prettier:** Format code consistently
- **Comments:** Document complex logic
- **Testing:** Add tests for new features

### 👥 Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the code of conduct

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

MIT License

Copyright (c) 2025 Sai Harsha Bheemisetty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

1. **Permission Notice**  
   The above copyright notice and this permission notice shall be included in all
   copies or substantial portions of the Software.

2. **Warranty Disclaimer**  
   The Software is provided "as is", without warranty of any kind, express or
   implied, including but not limited to the warranties of merchantability,
   fitness for a particular purpose, and noninfringement. In no event shall the
   authors or copyright holders be liable for any claim, damages, or other
   liability, whether in an action of contract, tort, or otherwise, arising from,
   out of, or in connection with the Software or the use or other dealings in the
   Software.

3. **License Disclaimer**  
   This license does not grant you any rights to use the trademarks or trade
   names of the authors or copyright holders, except as required to reproduce the
   copyright notice.

4. **Acceptance**  
   By using or distributing the Software, you agree to this license. If you do not
   agree to this license, you may not use or distribute the Software.

