# Security Application Experiment

This repository is an experimental project designed to showcase the integration of CI/CD security scanning tools and demonstrate a basic understanding of TypeScript, React, Node.js, Express, and Docker. The project includes a simple web application that allows users to sign up, log in, ask security-related questions, and receive recommendations. It also integrates automated security scanning to ensure a secure codebase.

## Table of Contents

- [Purpose](#purpose)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [CI/CD Pipeline](#cicd-pipeline)
  - [Security Scanning](#security-scanning)
- [Docker Setup](#docker-setup)
- [Contributing](#contributing)
- [License](#license)

## Purpose

This project serves as a demonstration of:

- Basic understanding of TypeScript, React, and Node.js.
- Building a full-stack web application with a backend API and a frontend user interface.
- Using Prisma as an ORM for PostgreSQL.
- Implementing JWT-based authentication in an Express application.
- Integrating security scanning tools into a CI/CD pipeline using GitHub Actions.
- Working with Docker for containerization and ensuring consistency across development and production environments.

## Technology Stack

- **Frontend:** React, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** JWT-based authentication with Passport.js
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Security Scanning:** Snyk, OWASP ZAP, Talisman

## Features

- **User Authentication:** Users can sign up and log in to the application using JWT authentication.
- **Question and Answer Module:** Users can ask security-related questions and receive answers.
- **Security Recommendations:** The application provides security recommendations based on user queries.
- **Automated Security Scanning:** Integrated CI/CD pipeline with automated security scanning to ensure a secure codebase.

## Setup Instructions

### Prerequisites

- **Node.js:** v14 or higher
- **Docker:** v20 or higher
- **Docker Compose:** v1.27 or higher
- **PostgreSQL:** If not using Docker for the database, you'll need a local PostgreSQL instance

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/security-app.git
   cd security-app
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```env
   JWT_SECRET=your_jwt_secret
   DATABASE_URL=postgres://postgres:password@db:5432/mydb
   ```

### Running the Application

1. **Run the application using Docker:**

   ```bash
   docker-compose up --build
   ```

   - The backend API will be accessible at `http://localhost:3000`.
   - The frontend will be accessible at `http://localhost`.

2. **Run the application locally without Docker:**

   - Start PostgreSQL server and ensure it is running.
   - Start the backend:

     ```bash
     npm run start
     ```

   - Start the frontend:

     ```bash
     cd client
     npm start
     ```

## CI/CD Pipeline

### Security Scanning

This repository includes a GitHub Actions workflow that performs the following security scans:

- **Talisman:** Scans for potential secrets and sensitive data in the codebase.
- **Snyk:** Scans for vulnerabilities in project dependencies and Docker images.
- **OWASP ZAP:** Performs a dynamic application security test (DAST) to identify common vulnerabilities.

The scans run automatically on each push and pull request to the `main` branch.

## Docker Setup

The project is fully containerized using Docker and Docker Compose. The Docker setup includes:

- A **Node.js** container for the backend.
- A **React** container served via **Nginx** for the frontend.
- A **PostgreSQL** container for the database.

To build and run the containers:

```bash
docker-compose up --build
```

This will start the backend on `http://localhost:3000` and the frontend on `http://localhost`.

## Contributing

Contributions are welcome! If you find any issues or want to add enhancements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
