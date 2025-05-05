# Employee Portal

A comprehensive employee management system for HR and Admin to streamline
employee data handling, task monitoring, payroll, and authentication. Built with
React, Firebase, and Node.js.

## Live Site URL

[Deployed Website Link](#) (https://employeemanagement01.netlify.app/)

---

## Admin Credentials

- **User:** admin123@gmail.com
- **Password:** Admin12##

---

## HR Credentials

- **User:** ishr@gmail.com

- **Password:** Ishr8848##

## Employee Credentials

- **User:** user@gmail.com

- **Password:** User@gmail.com

## Key Features

### Authentication

1. **Email and Password-based Authentication:**
   - Login and Registration pages with role selection (Employee/HR). Admin role
     creation restricted to the backend.
2. **Password Validation:**
   - Passwords must have at least 6 characters, one capital letter, and one
     special character.
3. **Social Login:**
   - Google authentication assigns the default role of Employee.
4. **Role-based Access Control:**
   - JWT token implementation for secure role-based mutations and route
     protections.

### Employee-Specific Features

1. **Work Sheet (/work-sheet):**
   - Add tasks with fields for task type, hours worked, and date.
   - Edit and delete tasks dynamically without page reload.
   - Tasks saved and retrieved per employee from the database.
2. **Payment History (/payment-history):**
   - Displays monthly salary history with pagination for more than 5 rows.
   - Sorted by default to show the latest payments first.

### HR-Specific Features

1. **Employee List (/employee-list):**
   - View all employees in a table with options to verify employees and toggle
     verification status.
   - Pay verified employees only with a modal to specify month and year for
     payment.
   - Details page showing individual employee details and a salary bar chart.
2. **Progress (/progress):**
   - Filter work records by employee name and month.
   - Displays a comprehensive overview of submitted tasks for HR.

### Admin-Specific Features

1. **All Employee List (/all-employee-list):**
   - Manage employees with options to fire, promote to HR, and adjust salaries.
   - Enforce salary increase only.
   - Toggle between table and card grid views.
2. **Payroll (/payroll):**
   - Approve HR-submitted payment requests.
   - Prevent duplicate payments for the same month/year.
   - Secure payment process with a payment gateway integration.

### General Features

1. **Contact Us (/contact-us):**
   - A form for visitors to send messages to the admin.
   - Displays company address and handles user feedback efficiently.
2. **Image Upload:**
   - Employee photo upload during registration using imgbb.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Authentication:** Firebase Authentication
- **Database:** Firebase Firestore
- **Charting Library:** Chart.js for salary vs. month-year bar charts
- **Date Picker:** React DatePicker
- **Table Component:** TanStack Table
- **Payment Gateway:** Stripe/PayPal (integrated for secure transactions)
- **Hosting:** Vercel/Netlify (for frontend), Heroku/Render (for backend)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-tawhidbokth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables: Create a `.env` file in the root directory and
   add the following:

   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   JWT_SECRET=your-jwt-secret
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run the backend server:

   ```bash
   node server.js
   ```

6. Access the website at `http://localhost:5173`.

---

## Project Structure

```
.
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── Dashboard
│   │   │   ├── Employee
│   │   │   │   ├── WorkSheet.js
│   │   │   │   └── PaymentHistory.js
│   │   │   ├── HR
│   │   │   │   ├── EmployeeList.js
│   │   │   │   ├── Progress.js
│   │   │   │   └── Details.js
│   │   │   ├── Admin
│   │   │   │   ├── AllEmployeeList.js
│   │   │   │   └── Payroll.js
│   │   │   └── Shared
│   │   │       └── Navbar.js
│   ├── contexts
│   │   ├── AuthContext.js
│   │   └── RoleContext.js
│   ├── hooks
│   │   └── useAuth.js
│   ├── pages
│   │   ├── ContactUs.js
│   │   └── NotFound.js
│   ├── utils
│   │   └── api.js
│   └── App.js
├── server
│   ├── middleware
│   │   └── authMiddleware.js
│   ├── routes
│   │   └── api.js
│   └── server.js
├── public
│   └── index.html
└── package.json
```

---

## Features Summary

1. Role-based access control for Employee, HR, and Admin.
2. Firebase email/password authentication with social login.
3. Employee-specific task management and payment history.
4. HR-specific employee verification, payments, and progress monitoring.
5. Admin-specific payroll approval, role adjustments, and firing options.
6. Fully responsive UI built with Tailwind CSS.
7. JWT-based middleware for secure backend operations.
8. Integration with a payment gateway for payroll operations.
9. Dynamic table updates without page reload.
10. Employee photo upload with imgbb integration.
