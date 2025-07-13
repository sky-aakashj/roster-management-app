# Roster Management Application

A healthcare provider scheduling system with calendar views,searching, filtering, and availability management.

## Live Demo

[View Live Demo](#myliveurl/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Component Documentation](#component-documentation)
- [Installation](#installation)

## ✨ Features

### Current Implementation

- **Dual View Interface**
  - List view with provider cards
  - Calendar view
- **Advanced Filtering**
  - Filter by service type (Therapist/Psychiatrist)
  - Filter by provider type (In-house/External)
  - Filter by clinic center
- **Search Functionality**
  - Search providers by name
  - Multi-select up to 5 providers
- **Visual Indicators**
  - Color-coded availability slots of Providers:
    - 🟢 Online
    - 🟠 Offline
    - 🔵 Online+Offline
    - 🟤 Blocked
    - ⚪ Available
    - 🔵 (Dark) Online Booked
    - 🔴 Offline Booked

## 🛠 Tech Stack

- **Frontend**: React.js
- **Build Tool**: Vite
- **State Management**: Redux
- **Styling**: Styled Components (CSS-in-JS)
- **Icons**: React Icons
-

## 🚀 Installation

1. Clone the repository

```bash
git clone https://github.com/sky-aakashj/roster-management-app.git
cd roster-management-app
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```
