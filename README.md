# Express with Mongoose

This project is a backend application built with Node.js, Express, TypeScript, and Mongoose, and Zod for data validation. It includes APIs for managing tasks.

## Table of Contents

- [Express with Mongoose](#express-with-mongoose)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Production Mode](#production-mode)
    - [Linting and Formatting](#linting-and-formatting)
    - [Fix linting errors:](#fix-linting-errors)
- [API Documentation](#api-documentation)
      - [Read Full Documentation](#read-full-documentation)

## Prerequisites

- Node.js (v20.x or higher)
- npm
- MongoDB (local or remote instance)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/tajkir-alam/todo-app-server.git
   cd express-with-mongoose
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a .env file in the root directory and add your MongoDB connection string:

   ```
   MONGO_URI=provide your mongoDB Atlas URI here
   ```

4. Running the project:

   ```
   npm run start:dev
   ```

### Production Mode

```npm run build
    npm run build
```

### Linting and Formatting

```
    npm run lint
```

### Fix linting errors:

```
    npm run lint:fix
```

<br />
<br />

# API Documentation

#### Read Full Documentation

`GET /api/v1/tasks`