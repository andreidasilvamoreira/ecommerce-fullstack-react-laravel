# E-commerce Full Stack API

RESTful API developed with Laravel to support a complete e-commerce platform, including product catalog, shopping cart, orders, payments, reviews, favorites, coupons, and user management.

This API was designed to integrate with a React frontend, simulating a real-world e-commerce system.

## 🛠️ Technologies
- PHP
- Laravel
- MySQL
- REST API
- Eloquent ORM
- Authentication with Tokens

## 📂 Main Features

### 🛍️ Products and Categories
- Product CRUD (create, update, delete, list)
- Category management
- Product-category relationships
- Product availability control

### 🛒 Shopping Cart
- Create and manage shopping carts
- Add and remove items from cart
- Update item quantities
- Cart-item relationship management

### ❤️ Favorites
- Add products to favorites
- Remove products from favorites
- List user favorite products

### ⭐ Reviews
- Product evaluation and rating system
- User reviews associated with products
- Average product rating calculation

### 🎟️ Coupons
- Coupon creation and management
- Percentage or fixed-value discounts
- Coupon validation
- Association of coupons with orders

### 📦 Orders
- Order creation from shopping cart
- Order-item relationship
- Order status control (pending, paid, shipped, completed)
- Order history per user

### 💳 Payments
- Payment registration linked to orders
- Payment status tracking
- Support for different payment methods

### 🏠 Addresses
- User address management
- Multiple addresses per user
- Address association with orders

### 👥 Users and Authentication
- User registration and authentication
- Role separation (Admin / User)
- Protected routes with authentication
- User profile management

## 🧠 Applied Concepts
- MVC Architecture
- RESTful API design
- Eloquent Relationships (One-to-One, One-to-Many, Many-to-Many)
- Repository and Service patterns
- Data validation
- Authentication and authorization
- Database migrations and seeders
- Separation of concerns
- Clean and scalable backend architecture

## ▶️ How to Run the Project

```bash

back-end:

git clone https://github.com/andreidasilvamoreira/ecommerce-fullstack-react-laravel
cd Projeto-Ecommerce-FullStack/aplicativoEcommerce/EcommerceAPI
composer install
cp .env.example .env

php artisan key:generate
php artisan migrate
php artisan serve

front-end:

npm install
npm run dev
