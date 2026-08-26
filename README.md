# DigiNotes

DigiNotes is a full-stack note-taking application that allows users to create, manage, and organize their notes with secure authentication. Built with the MERN stack (MongoDB, Express, React, Node.js), it provides a seamless experience for managing personal notes in the cloud.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Overview

DigiNotes is a web application that enables users to:
- Register and authenticate securely
- Create, read, update, and delete notes
- Organize notes with tags
- Maintain note privacy with JWT-based authentication

The application follows a client-server architecture with separate frontend and backend directories.

## Features

- **User Authentication**: Secure signup and login with bcrypt password hashing and JWT tokens
- **Note Management**: Create, view, update, and delete notes
- **Tag Organization**: Add tags to notes for better organization
- **User-Specific Notes**: Each user can only access their own notes
- **Responsive UI**: Built with React and Bootstrap for a modern, responsive interface
- **Real-time Operations**: CRUD operations with proper error handling

## Tech Stack

### Frontend (Client)
- **React** - JavaScript library for building user interfaces
- **React Router** - For navigation and routing
- **Bootstrap** - CSS framework for styling
- **Context API** - For state management

### Backend (Server)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **bcryptjs** - Password hashing
- **jsonwebtoken** - Authentication tokens
- **express-validator** - Input validation

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) Atlas account or local installation
- [Git](https://git-scm.com/)

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/DigiNotes.git
cd DigiNotes
```

### Install Server Dependencies

```bash
cd Server
npm install
```

### Install Client Dependencies

```bash
cd ../Client
npm install
```

## Environment Configuration

Create environment files for both server and client:

### Server (.env)

Create `Server/.env` with the following variables:

```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/DigiNotes
JWT_SECRET=your_jwt_secret_key
```

### Client (.env)

The Client uses `react-scripts` which reads from `.env` files. Create `Client/.env` if needed for configuration.

## Available Scripts

### Server (`Server/package.json`)

| Script | Description |
|--------|-------------|
| `npm test` | Run tests |
| `npm start` | Start the server |

### Client (`Client/package.json`)

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode at `http://localhost:3000` |
| `npm run build` | Builds the app for production to the `build` folder |
| `npm test` | Runs test suite |
| `npm run both` | Runs both the server and client concurrently |

## Project Structure

```
DigiNotes/
├── .gitignore
├── README.md          # This file
├── Client/            # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── constant/       # Constant values
│   │   ├── context/        # React context (NoteState)
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   └── package.json
├── Server/            # Node.js backend
│   ├── middleware/       # Auth middleware (fetchuser)
│   ├── models/           # Mongoose models (User, Note)
│   ├── routes/           # API routes (auth, notes)
│   ├── .env              # Environment variables
│   ├── db.js             # MongoDB connection
│   ├── index.js          # Server entry point
│   └── package.json
└── .gitignore
```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/creatUser` | Register a new user |
| `POST` | `/login` | Login user and get JWT token |
| `POST` | `/getUser` | Get logged-in user details (requires auth) |

### Note Routes (`/api/notes`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/fetchallnotes` | Get all notes for logged-in user |
| `POST` | `/addnote` | Add a new note (requires auth) |
| `PUT` | `/updatenote/:id` | Update an existing note (requires auth) |
| `DELETE` | `/deletenote/:id` | Delete a note (requires auth) |

## Usage

1. **Start the Server**
   ```bash
   cd Server
   npm run start
   ```
   Server will run on `http://localhost:5000`

2. **Start the Client**
   ```bash
   cd Client
   npm start
   ```
   Client will run on `http://localhost:3000`

3. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`

4. **Register/Login**
   - Create a new account or login with existing credentials
   - Once authenticated, you can start adding and managing notes

## License

This project is licensed under the **MIT License**.

---

**DigiNotes** - Your notes, organized in the cloud. 📝