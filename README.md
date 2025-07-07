User Management Dashboard
A full-stack CRUD application built with MERN Stack (MongoDB, Express.js, React.js, Node.js) that allows users to be added, viewed, updated, and deleted. This project demonstrates practical full-stack development, user form validation, and seamless frontend-backend integration.

📩 Submitted as part of an internship application for Flikt Technology Web Solution

🔧 Features
➕ Add new users with validation

📝 Edit existing users

❌ Delete users with confirmation

📄 View all users in a table

✅ Form validation (email format, phone number, age limit)

📦 MongoDB backend with Mongoose for schema modeling

🖼️ Tech Stack
Layer	Technology
Frontend	React.js, Axios
Backend	Node.js, Express.js
Database	MongoDB, Mongoose
Others	CORS, Dotenv

📁 Folder Structure
bash
Copy
Edit
/client
  ├── App.js
  ├── api.js
  └── components/
      ├── UserForm.js
      └── UserTable.js

/server
  ├── server.js
  ├── models/
      └── User.js
  ├── routes/
      └── users.js
  └── .env
🛠️ Setup Instructions
Backend
bash
Copy
Edit
cd server
npm install
# Add your MongoDB URI in .env
MONGO_URI=your_mongodb_connection_url_here
npm start
Frontend
bash
Copy
Edit
cd client
npm install
npm start
🧪 API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
POST	/users	Create new user
PUT	/users/:id	Update user by ID
DELETE	/users/:id	Delete user by ID

✅ Validation Logic
Email must be in correct format

Phone must be 10 digits

Age must be between 1 and 100

All fields are required

📸 Screenshots
(Add screenshots here if you'd like. You can show the dashboard, form modal, and table view.)

📌 Purpose
This project showcases:

Real-world application of React with Express

RESTful API design and consumption

Form validation and data handling

MongoDB integration for persistent storage
