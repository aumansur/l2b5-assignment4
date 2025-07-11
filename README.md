# 📚 Book Hub Library Management System

A modern and minimal **Library Management System** built with **React**, **Redux Toolkit**, **RTK Query**, **Tailwind CSS**, and **ShadCN UI**.

This app allows users to manage books and borrowing records with a clean UI and responsive components.

---

## 🔥 Live Frontend

👉 [Live Preview](https://l2b5-assignment4.vercel.app)  

---
## 🔥 Live Backend 

👉 [Live Preview](https://l2b5-assignment3.vercel.app)  

---


## ⚙️ Features

- ✅ View all books in table or card layout
- 📖 See book details at `/books/:id`
- ➕ Borrow books using modal (with quantity and due date)
- ⛔ Disable borrow if stock = 0
- 🔁 Realtime update available copies after borrow
- 📊 Borrow summary (aggregated total borrowed by book)
- 🎠 Full-screen responsive image carousel
- 🔍 Home page shows 10 books with a "See More" button

---

## 🛠️ Tech Stack

- ⚛️ React + TypeScript
- 📦 Redux Toolkit + RTK Query
- 💨 Tailwind CSS + ShadCN UI
- 🧾 React Hook Form + Zod
- 🗃️ MongoDB (via REST API backend)

---

## 📁 Folder Structure

```src/
├── components/
│ └── module/ # BookCard, BorrowModal, Carousel, etc.
│ └── ui/ # ShadCN UI Components
├── pages/
│ └── Home.tsx
│ └── AllBooks.tsx
│ └── BookDetails.tsx
├── redux/
│ └── features/ # bookApi, borrowApi, bookSlice, etc.
├── types/
│ └── book.ts
│ └── borrow.ts
└── utils/
└── Container.tsx
```

---

## 🧑‍💻 Getting Started

### ✅ Prerequisites

- Node.js ≥ 18
- npm or yarn

---

### 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/aumansur/l2b5-assignment4.git

# 2. Move into the directory
cd l2b5-assignment4

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

 

