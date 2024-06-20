# appening-api

API for authentication, authorization, and string searching to find anagrams in an array.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sanjayms00/appening-api.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd appening-api
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root of your project and add the necessary environment variables. For example:
   ```
   PORT=3000
   MONGO_URI=your_mongo_uri/appeningApi
   PRIVATE_KEY=your_jwt_private_key
   ```

### Running the Application

To start the server in development mode:

```bash
npm run dev
```

### Routes

```bash

POST http://localhost:3000/api/auth/login

POST http://localhost:3000/api/auth/signup

GET http://localhost:3000/api/users/list

GET http://localhost:3000/api/string/Care

```

### Technologies Used

```bash

    Node.js
    Express
    Mongoose
    JWT (jsonwebtoken)
    bcryptjs
    dotenv
    nodemon (dev dependency)

```
