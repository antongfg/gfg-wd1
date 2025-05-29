# 🧑‍🎓 Student Course Dashboard (React + Redux + React Router)

Welcome to your 45-minute challenge! In this mini-project, you'll build a simple **Student Course Dashboard** using **React**, **Redux Toolkit**, and **React Router DOM**.

---

## 🧠 What You’ll Learn

✅ React component structure  
✅ Routing between pages  
✅ Managing global state with Redux Toolkit  
✅ Working with forms and state updates  
✅ Using React hooks (useState, useEffect, useSelector, useDispatch)

---

## 🚀 Task Overview

### 🎯 Objective:

Build a dashboard that lets a student:

1. **View a homepage**
2. **Navigate to "Courses" and "Profile"**
3. **See a list of courses fetched from Redux**
4. **Add a new course through a form**
5. **Navigate between pages without reloading**

---

## 🗂️ Project Structure

<pre lang="md"><code>
📦 student-course-dashboard
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── Navbar.jsx
│ ├── features/
│ │ └── courses/
│ │ ├── coursesSlice.js
│ │ └── CoursesPage.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── Profile.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── store.js
├── package.json
├── vite.config.js
└── README.md
</code></pre>

---

## 🏁 Setup Instructions

1. **Clone this repo**
   ```bash
   git clone https://github.com/your-username/student-course-dashboard.git
   cd student-course-dashboard
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Start the app

   ```bash
   npm run dev
   ```

### 📝 Project Tasks

- [ ] Setup routing between:

  - `/` → Home page
  - `/courses` → Courses page
  - `/profile` → Profile page

- [ ] Use **Redux Toolkit** to manage the list of courses:

  - Create a `coursesSlice` with actions to add a course
  - Store course data with `title` and `description`

- [ ] Create a **form** to add a new course:

  - Inputs for `title` and `description`
  - Dispatch the action to add a course on form submit

- [ ] Display all added courses on the `/courses` page:

  - List all courses from Redux store

- [ ] Style the app using **basic CSS**:
  - Keep it clean and readable
  - Use consistent margins, padding, and font styles

📸 Bonus (Optional)

- Add course deletion

- Save courses to localStorage and load from there

- Add loading indicators

🕒 Time Limit

- ⏳ You have 45 minutes to complete this challenge. Focus on functionality first!
