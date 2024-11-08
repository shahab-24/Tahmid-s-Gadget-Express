# Ts Gadget Express

## Welcome to Ts Gadget Express, a web application designed to explore and manage a variety of gadgets with ease. This project allows users to view products, add items to a cart or wishlist, and keep track of selected items through a personalized dashboard.

### Live Demo
Live Website Link: 


# Project Documentation
For detailed requirements and project specifications, refer to the Requirement Document.
# file:///C:/Users/DELL/Desktop/Batch-10_Assignment-08-.pdf


# Key Features
## 1.Add to Cart & Wishlist: Users can add gadgets to a cart or wishlist. The items are saved in local storage, and a count badge is shown for both.
## 2.Dashboard with Tabs: A user-friendly dashboard that separates Cart and Wishlist items into tabs, allowing users to switch between them.
## 3.Dynamic Rendering of Items: The dashboard dynamically displays each item as a card under the selected tab, with options to remove items.
## 4.Data Persistence with Local Storage: Data is saved in the browser's local storage, ensuring cart and wishlist contents persist even after page refresh or browser restart.
## 5.Rating Display: Each product card displays a rating component with a user-friendly star display.


# Technologies Used
## React.js: The project is built with React, using components to create a modular and maintainable structure.
## Tailwind CSS: Tailwind was used for fast, utility-first styling.
## React Router: React Router enables seamless navigation and routing within the app.
## DaisyUI
## React-toastify
## Icons8 for Icon
## React star component


# Concepts Used in This Project
This project incorporates several fundamental React concepts:

React Components: Modular and reusable components have been used throughout the project, including the Navbar, Product Details, and Dashboard components.
State Management: useState hooks are used for managing local component states, such as tracking active tabs in the dashboard.
Effect Hook (useEffect): This hook is used to manage side effects, such as fetching product data and updating local storage whenever cart or wishlist changes.
Context API: Context API is utilized to manage and share the cart and wishlist data across components, allowing for smooth state management without prop drilling.
React Router DOM: Enables dynamic routing, allowing users to navigate seamlessly across different pages, including product details and the dashboard.


# Data Management
For managing and persisting data, Context API and Local Storage are used:

Context API: Shared data for the cart and wishlist is managed using Context API, making it accessible across the entire app.
Local Storage: To ensure data persistence, cart and wishlist items are stored in local storage. This allows users to retain their selections even after refreshing the page or reopening the browser.