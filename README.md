Kodembe Car Dealership Frontend
Table of Contents

    About the Project
    Features
    Technologies Used
    Project Structure
    Getting Started
        Prerequisites
        Installation
        Running the Application
    Usage
    Screenshots
    Roadmap
    Contributing
    License
    Contributors

About the Project

Kodembe Car Dealership is a modern vehicle marketplace designed for buying and reviewing cars. This project aims to provide a seamless user experience, allowing customers to browse, compare, and purchase vehicles with ease.
Features

    User Authentication:
        Secure sign-up, login, and logout using Firebase.

    Product Browsing:
        View product categories, search, and filter options.

    Product Reviews:
        Users can rate and review products they've purchased.

    Shopping Cart:
        Add and remove items with a dynamic price update.

    Order Management:
        View and manage orders with detailed product breakdowns.

    Responsive Design:
        Works smoothly across all devices (desktop, tablet, and mobile).

Technologies Used

    Frontend: React.js
    Styling: Tailwind CSS
    State Management: React Context API
    Authentication: Custom methods
    Deployment: Vercel

Project Structure

frontend/
├── public/                  # Static files (index.html, favicon, etc.)
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable components (Navbar, Footer, etc.)
│   ├── pages/               # Main pages (HomePage, ProductPage, CartPage, etc.)
│   ├── context/             # Context providers for global state
│   ├── services/            # API calls and Firebase integration
│   ├── styles/              # Global and component-specific styles
│   └── utils/               # Utility functions
└── README.md

Getting Started
Prerequisites

    Node.js (v14 or higher)
    npm or yarn package manager

Installation

    Clone the repository:

git clone https://github.com/R-kjim/gizmo-galaxy-server/issues
cd kodembe-car-dealership

Install dependencies:

npm install

Create an .env file: Add your Firebase and backend URL configurations:

    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_BACKEND_URL=http://localhost:5000

Running the Application

Start the development server:

npm start

The application will be available at http://localhost:3000.
Usage

    Sign Up / Log In to access personalized features.
    Browse Products and filter by categories or search keywords.
    Add Products to Cart and proceed to checkout.
    Post Reviews and rate products after purchase.
    View Order History under your account.

Screenshots
Home Page

Product Details Page

Shopping Cart

Roadmap

    Wishlist Feature: Allow users to save products for future purchase.
    Payment Gateway: Integrate Stripe or PayPal for secure transactions.
    Admin Dashboard: Manage products, categories, and view user statistics.

Contributers
Robert Kimani
Joan Kamau
Grace Ndunda
Philip Mongare
Frankline Kirwa
Ernest Otieno


We welcome contributions! Follow these steps to contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature/your-feature).
    Commit your changes (git commit -m "Add feature").
    Push to the branch (git push origin feature/your-feature).
    Open a pull request.
