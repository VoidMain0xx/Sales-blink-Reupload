# Email Scheduling Application

This is a full-stack web application for scheduling and sending emails. It allows users to schedule different types of emails (e.g., welcome emails, reminders) and sends them automatically at specified times. The backend is built with Node.js and Express, while the frontend is developed using React. MongoDB is used as the database.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Schedule and send different types of emails:
  - Welcome emails
  - Reminders
  - Notifications
  - Follow-ups
  - Replies
  - Greetings
- User-friendly interface for managing scheduled emails
- MongoDB database integration for storing scheduled email data
- Automatic email sending using Node Mailer and Agenda

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Agenda
- Nodemailer

### Frontend
- React
- React Router
- Axios
- Bootstrap (for styling)

## Installation

To run this application locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone <repository-url>

```bash

2.Backend Setup
Make sure MongoDB is installed and running on your system.

Start the backend server:

   ```bash
   nodemon index.js

```bash

Frontend Setup
Configure the backend API URL in frontend/src/config.js.

Start the frontend development server:

   ```bash
   cd frontend 
   npm start

```bash
