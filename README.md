PROJECT: Stationery Shop API

A robust Stationery Shop API built with Node.js, Express, TypeScript, and MongoDB. This application allows users to manage stationery products, place orders, and calculate revenue while ensuring data integrity with Mongoose and validation with Zod.

FEATURES:

1. Product Management
   Add new stationery products with details like name, brand, price, category, description, and stock status.
   Retrieve all products or filter products by name, brand, or category using query parameters.
   Retrieve details of a specific product by its ID.
   Update product details (e.g., price, quantity).
   Delete a product from the inventory.

2. Order Management
   Place an order for a stationery product:
   Automatically updates inventory quantity.
   Marks the product as out-of-stock when quantity reaches zero.
   Validates sufficient stock before creating the order.
   Retrieve order details for auditing and tracking.

3. Revenue Calculation
   Aggregate total revenue from all orders using MongoDB's aggregation framework.

4. Robust Error Handling
   Custom error handling for scenarios like:
   Validation errors (e.g., invalid email or insufficient stock).
   Resource not found (e.g., invalid product or order ID).
   Internal server errors with detailed stack traces in development mode.

5. Validation and Data Integrity
   Zod is used for request validation at the controller layer.
   Mongoose schema validation ensures consistent and accurate data in the database.

TECH STACK:

Backend:
Node.js: Runtime for building the API.
Express.js: Framework for creating RESTful endpoints.
TypeScript: Ensures type safety and code maintainability.

Database:
MongoDB: NoSQL database for storing product and order data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.

Validation:
Zod: Schema validation for request payloads.
Mongoose Validators: Enforces database-level constraints.

Additional Tools:
Nodemon: Automatically restarts the server during development.
ESLint & Prettier: For maintaining code quality and formatting.
dotenv: For environment variable management.

INSTALLATION AND SETUP:

Follow these steps to set up the project locally:

Prerequisites:
Node.js (version 16 or above)
MongoDB (local instance or a cloud cluster)
A package manager (npm or yarn)

Steps:

1. Clone the Repository
2. Install Dependencies (npm install)
3. Create a .env file in the root directory.

Add the following variables:
PORT=3000
MONGO_URI=mongodb://localhost:27017/stationery-shop
NODE_ENV=development

4. Start MongoDB
5. Run the Application
6. Access the API

The API will be available at: http://localhost:3000

Also, You can visit the live site from here: https://stationary-shop-server-six.vercel.app/
