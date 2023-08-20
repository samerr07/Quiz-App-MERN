# Quiz App - MERN Stack

# Live Demo : https://quiz-app-mern-frontend.vercel.app/

Welcome to the Quiz App, a web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to take quizzes on various topics, view their scores, and manage their profiles.

## Features

- **User Authentication**: Users can sign up and log in to the application using their email and password. Passwords are securely hashed before being stored in the database.

- **Quiz Taking**: Users can select a quiz from the list and answer a series of multiple-choice questions. The app provides instant feedback on the correctness of each answer.

- **Scoring**: After completing a quiz, users receive their score along with a summary of correct and incorrect answers.

- **Score History**: The app keeps track of users' quiz history, allowing them to review past quiz results and see their progress over time.

- **Admin Panel**: Admin users have access to an admin panel where they can manage quizzes. This includes adding new quizzes, editing existing quizzes, and deleting quizzes.

## Tech Stack

- **Frontend**: The frontend is built using React.js, a popular JavaScript library for building user interfaces. React Router is used for handling navigation within the app.

- **Backend**: The backend is developed using Node.js and Express.js. It provides API endpoints for user authentication, fetching quiz data, submitting quiz answers, and managing quizzes.

- **Database**: MongoDB is used as the database to store user information, quiz data, and quiz results.

- **Authentication**: User authentication is implemented using JSON Web Tokens (JWT) for secure token-based authentication.

- **State Management**: Redux is used for state management, allowing efficient data flow between components.

- **Styling**: Styling is done using CSS or a CSS-in-JS solution like styled-components.

- **Deployment**: The application can be deployed using platforms like Heroku, Netlify, or Vercel for the frontend, and services like MongoDB Atlas for the database.

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/quiz-app.git`
2. Navigate to the frontend and backend directories separately and run `npm install` to install dependencies.
3. Set up a MongoDB database either locally or using a cloud service like MongoDB Atlas. Update the database connection string in the backend configuration.
4. In the backend directory, create a `.env` file for storing sensitive information such as JWT secret key and database connection string.
5. Run the frontend and backend servers using `npm start` in their respective directories.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy using the Quiz App and happy learning!

*Note: This README is a basic template and should be customized to match your specific project's structure and features.*
