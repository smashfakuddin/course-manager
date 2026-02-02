# 📚 Course Management System

A role-based Course Management System built entirely with **Next.js 14+ App Router**, where teachers can create and manage courses, add structured academic content, and students can access course information — **without any separate backend**.

---

## 🚀 Features

### 👨‍🏫 Teacher Features
- Create courses
- Pick (assign) courses from the available course list
- Unpick (remove) assigned courses
- Add and manage:
  - Course overview
  - Course outline
  - Upcoming assignments
  - Upcoming events
- Full **CRUD operations** for all course-related content
- Only assigned teachers can modify course content

### 👩‍🎓 Student Features
- View enrolled courses
- Access course overview and outline
- View upcoming assignments and events
- Read course announcements and resources

### 🔐 Authentication & Authorization
- Role-based authentication:
  - Teacher
  - Student
  - Admin (optional)
- Route protection using **Next.js Middleware**
- Secure session handling (JWT / NextAuth / custom auth)
- Authorization enforced in **Server Components & Server Actions**

---

## 🛠️ Tech Stack

- **Next.js 14+ (App Router)**
- **React Server Components**
- **Server Actions**
- **Route Handlers**
- **MongoDB (via Mongoose / Prisma)**
- **Tailwind CSS**
- **NextAuth / Custom Auth (JWT)**

---

## 📂 Project Structure

course-management/
├── app/
│ ├── (auth)/
│ ├── (dashboard)/
│ │ ├── teacher/
│ │ ├── student/
│ │ └── admin/
│ ├── api/
│ │ ├── auth/
│ │ ├── courses/
│ │ └── users/
│ ├── middleware.ts
│ └── layout.tsx
│
├── lib/
│ ├── db.ts
│ ├── auth.ts
│ └── permissions.ts
│
├── models/
│ ├── User.ts
│ └── Course.ts
│
├── components/
├── actions/
│ ├── course.actions.ts
│ └── auth.actions.ts
│
├── README.md
└── package.json

---

## 🧩 Core Modules

### Course Module
- Create, update, delete courses
- Teacher pick / unpick functionality
- Store and manage:
  - Course title
  - Overview
  - Outline
  - Semester
  - Assigned teachers

### Content Module
- Course overview
- Course outline
- Upcoming assignments
- Upcoming events
- Full CRUD via **Server Actions**

### User & Role Module
- User registration and login
- Role-based access (Teacher / Student / Admin)
- Authorization checks at server level

---

## 🔑 Data Flow (No External Backend)

- **Server Actions** handle mutations (create, update, delete)
- **Route Handlers (`app/api`)** handle auth and data fetching
- **Server Components** fetch data securely
- **Client Components** used only where interactivity is required

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

```bash
git clone https://github.com/your-username/course-management.git
cd course-management
npm install
