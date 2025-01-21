
#  Frontend

## Prerequisites

Before you begin, ensure you have the following software installed:

- **Node.js (v14 or later)**
- **npm (Node Package Manager)**

## Installation

Follow these steps to get the frontend application up and running:

1. **Clone the repository**:

   ```bash
   git clone <repository_url>
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

