# 👥 React User Management App

A responsive CRUD (Create, Read, Update, Delete) application built with React to manage users using the JSONPlaceholder API. This project demonstrates core React concepts including hooks, routing, API integration, and modern UI/UX practices.

---

## 🚀 Features

- ✅ Fetch and display users from JSONPlaceholder
- ➕ Create new users (simulated via POST)
- ✏️ Edit existing users (simulated via PUT)
- ❌ Delete users (simulated via DELETE)
- 🔄 Real-time UI updates using local state
- 📱 Responsive design for desktop and mobile
- ⚠️ Error handling and user feedback
- ⏳ Loading spinner for API requests

---

## 🧱 Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| React          | UI framework                     |
| React Router   | Client-side routing              |
| JSONPlaceholder | Fake REST API for prototyping   |
| CSS            | Styling and layout               |
| React Hooks    | State and lifecycle management   |

---

## 📁 Project Structure
src/ ├── api/                 # API service layer │   └── userService.js ├── components/ │   ├── common/          # Reusable UI components │   │   ├── Spinner.jsx │   │   └── ErrorMessage.jsx │   └── users/           # User-specific components │       ├── UserList.jsx │       ├── UserItem.jsx │       └── UserForm.jsx ├── hooks/ │   └── useUsers.js      # Custom hooks for user state ├── pages/               # Route-based views │   ├── HomePage.jsx │   ├── AddUserPage.jsx │   └── EditUserPage.jsx ├── App.jsx              # Main app with routing ├── index.js             # Entry point └── index.css            # Global styles


---

## 🔗 API Reference

Base URL: `https://jsonplaceholder.typicode.com`

| Action       | Method | Endpoint         |
|--------------|--------|------------------|
| Fetch Users  | GET    | `/users`         |
| Create User  | POST   | `/users`         |
| Update User  | PUT    | `/users/:id`     |
| Delete User  | DELETE | `/users/:id`     |

> Note: JSONPlaceholder simulates write operations. Changes are not persisted on the server, so the app updates local state to reflect actions.
