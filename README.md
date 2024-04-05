# Byte-Bhaav-2345 

### Introduction
Welcome to our Recipe App! This is a full-stack web application developed using Node.js, Express, Mongoose for the backend, and Vite for the frontend. With this app, users can log in, view recipes according to their membership, and post their own recipes.

### Project Type
Fullstack

### Deployed App
Frontend: https://dist-nu-kohl.vercel.app/

Backend: https://byte-bhaav-2345.onrender.com/

### Directory Structure
RecipeGenius/
│
├── backend/
│   ├── config/
│   │   ├── database.js            # MongoDB configuration
│   │   └── jwt.js                 # JWT configuration
│   ├── controllers/
│   │   ├── authController.js      # Authentication controller
│   │   ├── recipeController.js    # Recipe-related operations controller
│   │   └── userController.js      # User-related operations controller
│   ├── middleware/
│   │   └── authMiddleware.js      # Authentication middleware
│   ├── models/
│   │   ├── recipeModel.js         # Recipe schema
│   │   └── userModel.js           # User schema
│   ├── routes/
│   │   ├── authRoutes.js          # Authentication routes
│   │   ├── recipeRoutes.js        # Recipe-related routes
│   │   └── userRoutes.js          # User-related routes
│   ├── services/
│   │   └── recommendationService.js   # Recipe recommendation service
│   ├── app.js                     # Express application setup
│   └── server.js                  # Entry point for backend server
│
└── frontend/
    ├── public/
    │   ├── index.html              # HTML entry point
    │   └── ...
    ├── src/
    │   ├── components/             # React components
    │   ├── containers/             # Container components
    │   ├── redux/                  # Redux setup
    │   ├── services/               # API service functions
    │   ├── styles/                 # CSS stylesheets
    │   ├── App.js                  # Main React component
    │   └── index.js                # React DOM rendering
    └── package.json                # Frontend dependencies and scripts


### Features
## List out the key features of your application.

User authentication (signup, login, logout)
Recipe Viewing: Users can view recipes based on their membership level.
Recipe Posting: Authenticated users can post their own recipes to share with others.
Multi-level sorting of recipes
CRUD operations for posts 
Implemented role-based access control to differentiate between user roles.

### Technology Stack
Node.js: Server-side JavaScript runtime environment.

Express.js: Web application framework for Node.js.

MongoDB: NoSQL database used for data storage.

bcrypt: Library for hashing passwords.

jwt: Library for generating JSON Web Tokens.

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running.

```bash
git clone 
cd Byte-Bhaav-2345
## For Backend
cd backend
npm i
npm run server
## For Frontend
cd frontend
npm i
npm start
```


### Team Members
- Chandan Pandey(Team Lead)
- Khadim Khan
- Vishnuraj K R
