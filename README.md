<p align="center">
  <img width="1536" height="450" alt="DAO" src="https://github.com/user-attachments/assets/cab5c778-3de6-465b-98f1-a2d49e2b6b72" />
</p>


<h1 align="center">🛡️ DAO Treasury Risk Guardian</h1>

<p align="center">
  Real-time monitoring & risk detection system for DAO treasury wallets
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-3C873A?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Dashboard-61DAFB?style=for-the-badge" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Ethers.js-Web3-627EEA?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active%20Development-blue?style=for-the-badge" />
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-features">Features</a> •
  <a href="#-screenshots">Screenshots</a> •
  <a href="#-getting-started">Getting Started</a>
</p>

---

## 🚨 Overview

**DAO Treasury Risk Guardian** is a full-stack Web3 monitoring system designed to track treasury wallets in real-time and detect risky activity before it becomes a problem.

Built for:
- DAOs  
- Protocol teams  
- Treasury managers  
- Web3 security teams  

---

## 🎯 Problem

Most DAOs:

- Do NOT monitor treasury wallets continuously  
- Detect issues too late  
- Lack automated alerting systems  

👉 Result: delayed response, financial loss, poor visibility

---

## 💡 Solution

This system provides:

- 🔄 Continuous wallet tracking  
- 📊 Risk detection engine  
- 🚨 Instant alert generation  
- 📡 Real-time dashboard  

---

## 🧱 Architecture

```text
Tracker Worker → MongoDB → Risk Engine → Alerts → Dashboard
                                  ↓
                           (Telegram - coming next)
```

## ⚙️ Tech Stack

### Backend
- Node.js + TypeScript  
- Express  
- MongoDB (Atlas)  
- JWT Authentication  

### Workers
- Tracker Worker (Blockchain monitoring)  
- Risk Engine Worker (alert generation)  

### Frontend
- React (Vite)  
- Context API  
- Axios  

### Web3
- Alchemy RPC  
- Ethereum (Sepolia / Mainnet ready)  

---

## ✨ Features

### 🔐 Authentication
- Secure login (JWT-based)

### 🏦 Treasury Management
- Create & manage treasury wallets  
- Multi-wallet support  

### 📡 Real-Time Tracking
- Fetch live wallet balances  
- Continuous polling  

### 🚨 Risk Detection
- Detect balance drops  
- Generate high-severity alerts  

### 📊 Dashboard
- Clean Web3-style UI  
- Alerts view  
- Treasury overview  

---

## 🖥️ UI Preview

### 📊 Dashboard
- System health status  
- Monitoring overview  

### 🚨 Alerts
- Severity-based alerts (🔴 HIGH)  
- Timestamped events  
- Wallet-level insights  

### 🏦 Treasuries
- Organization-level tracking  
- Multi-wallet visibility  

---

# 🔥 Why this is better

- Proper Markdown formatting ✅  
- Clear separation of concepts ✅  
- Easy to scan for recruiters/clients ✅  
- Looks like production repo ✅  

---


## Add screenshots section

Create an `assets` folder in the repo and save your screenshots as:

- `assets/dashboard.png`
- `assets/alerts.png`
- `assets/treasuries.png`

Then add:

## 📸 Screenshots

### Dashboard
<p align="center">

<img width="1251" height="300" alt="image" src="https://github.com/user-attachments/assets/6fec6ee2-b0de-4380-9d61-f479562a8213" />

### Alerts
<img width="1251" height="587" alt="image" src="https://github.com/user-attachments/assets/4476c5d0-8da7-473a-8db7-1d58b1357b37" />

### Treasuries
<img width="1246" height="301" alt="image" src="https://github.com/user-attachments/assets/5edd9e6d-bb15-4e4d-b850-96267fb47573" />
</p>
```

---
## 🗺️ Roadmap

- [x] JWT auth
- [x] Treasury management
- [x] Alerts API
- [x] MongoDB persistence
- [x] Tracker worker
- [x] Risk engine worker
- [x] Dashboard UI
- [ ] Telegram notifications
- [ ] ERC20 balance tracking
- [ ] Large outflow detection
- [ ] Multi-chain monitoring
- [ ] Slack / email alerts
- [ ] Historical analytics

## 📬 Contact

This project is being developed as part of a larger vision to build Web3 treasury monitoring and risk intelligence tools for DAOs, protocols, and crypto-native teams.

If you want to collaborate, test, or discuss productization, feel free to connect.
