
#  Frontend

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js (v14 or later)**
- **npm (Node Package Manager)**

## Installation

Follow these steps to get the frontend application up and running:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kishanth29/New-folder.git
   ```

2. **Navigate to the frontend directory**:


   cd frontend
  

3. **Install dependencies**:

   npm install
   

## Running the Application

Once the dependencies are installed, you can run the application:

1. **Start the development server**:

   
   npm start
   

2. **Open your browser** and navigate to:

   
   http://localhost:3000
   

   You should see the application running.

## Features

The Product Management application provides the following features:

1. **View a list of products**: Displays all products retrieved from the backend.
2. **Create new products**: A form to create new products and send them to the backend.
3. **Edit existing products**: Allows you to edit a product's details and update them in the database.
4. **Delete products**: Delete a product from the list and the backend.
5. **Pagination**: Navigate between different pages of the product list for easy viewing.

## Additional Notes

- Ensure that the **backend server** is running and accessible at `http://localhost:5000` for the frontend to function correctly.
- The frontend communicates with the backend for CRUD operations on the product data.



---

# Backend

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js (v14 or later)**
- **npm (Node Package Manager)**
- **MongoDB** (either locally or via a cloud provider like MongoDB Atlas)

## Installation

Follow these steps to set up and run the backend application:



1. **Navigate to the backend directory**:

   
   cd backend


3. **Install dependencies**:

   
   npm install


4. **Configure environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/intern
   ```

   Replace `MONGODB_URI=mongodb://localhost:27017/intern` with your actual MongoDB URI, either local or from MongoDB Atlas.

## Running the Application

Once the dependencies are installed, you can start the backend server:

1. **Start the server**:


   npm start
   

2. **Open your browser** and navigate to:


   http://localhost:5000


   The backend server will be up and running, and you can now interact with the API.

## API Endpoints

The backend exposes the following CRUD operations for managing products:

### 1. **GET** `/products`

Fetch all products.

- **Response**: An array of product objects.

### 2. **GET** `/products/:id`

Fetch a single product by its ID.

- **Response**: A product object.

### 3. **POST** `/products/create`

Create a new product.

- **Request body**: A JSON object containing `name`, `weight`, and `price`.
- **Response**: The created product object.

### 4. **PUT** `/products/update/:id`

Update an existing product.

- **Request body**: A JSON object containing the updated `name`, `weight`, and `price`.
- **Response**: The updated product object.

### 5. **DELETE** `/products/delete/:id`

Delete a product by its ID.

- **Response**: A success message.

## Additional Notes

- The backend uses **Express.js** for routing and **MongoDB** for data storage.
- The API communicates with the **frontend** to perform CRUD operations on product data.
- Ensure the **frontend** application is running on `http://localhost:3000` for complete functionality.

---


