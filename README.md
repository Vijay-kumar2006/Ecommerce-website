
Product Management System – Milestone 12

In this milestone, we’ll create an API endpoint to retrieve all products filtered by a user’s email and send that data to the frontend.

We will also build a function in the frontend to fetch this filtered data and display it dynamically using the ProductCard component.

Why This Milestone is Important

Understanding Data Filtering: Learn how to filter data based on specific criteria (e.g., user email) and send only relevant data to the frontend.

Dynamic Data Handling: Enhance your ability to retrieve and display data dynamically using React components.

Practical Experience with Filtering: This skill is essential for real-world applications, like showing only products created by a specific user.

Steps for Milestone 12
    
  Backend: Writing the Endpoint to Retrieve Filtered Product Data

We’ll create a GET endpoint that fetches all products associated with a specific user’s email from the database.


Frontend: Fetching Filtered Data from the Backend

On the frontend, we’ll create a function to call the new API endpoint and fetch products for a specific user email.

 Creating the Product Card Component
 
This component will display each product’s details, just like in previous milestones.

How This Works

Backend: The GET endpoint filters the products in MongoDB by the userEmail field and returns the results.

Frontend: The fetchUserProducts function fetches the filtered data based on the provided email.

Dynamic Rendering: The data is passed to the ProductCard component, which renders a card for each product that belongs to the specified user.
=======

In this milestone, we’ll build an API endpoint to fetch all product data from the database and display it dynamically on the frontend using a reusable product card component.

Why This Milestone is Important

Learn to Send and Receive Data: Understand how to connect the frontend and backend to retrieve data.

Dynamic Rendering: Display data dynamically by passing it to components, improving scalability and efficiency.


Reusable Components: Use a single component to display multiple products without writing repetitive code.

How it works :

Backend: The GET endpoint fetches all products from the MongoDB database.

Frontend: The fetchProducts function calls the API to get the product data.
=======
Product Management System

This project focuses on building a simple product management feature using Node.js, Express, MongoDB, and Mongoose. 

You’ll create a Product Schema, set up an API endpoint to save product data, and learn how to ensure data integrity through validation.

Why Product Schema and Validation Matter

Product Schema: Defines how product data is structured in the database. It ensures consistency and makes it easier to manage the data.

Validation: Protects your application by ensuring only valid data is stored in the database. This helps prevent errors and maintains data integrity.

Features

Create a product with fields like name, description, price, and image URL.

Validate input data to ensure required fields are filled with the correct data types.

Save the validated product data to MongoDB.

