# FoodZone: Food Ordering App

A responsive food-ordering frontend built with **React**, **Redux Toolkit** and **Tailwind CSS**. Browse a menu, filter by category, search dishes, and manage a cart that totals your order with delivery fee and taxes.

**Live:** [capable-crumble-173070.netlify.app](https://capable-crumble-173070.netlify.app/)

## Features

- **Menu** of 25 dishes, each with an image, price and a veg / non-veg badge
- **Category filters:** All, Breakfast, Soups, Pasta, Main Course, Pizza, Burger
- **Live search** by dish name from the navbar
- **Cart drawer** powered by Redux Toolkit: add items, remove items, change quantity
- **Order summary:** subtotal, delivery fee, taxes and a final total
- Toast notifications when items are added (React Toastify)
- **Login / logout** state kept in localStorage through React Context
- **About** and **Help** pages

## Tech stack

React 19 · Vite · Redux Toolkit · React Redux · React Router · Tailwind CSS 4 · React Bootstrap · React Icons / Lucide · React Toastify

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: menu, filters, search, cart |
| `/about` | About |
| `/login` | Login (or a greeting with logout once you're logged in) |
| `/help` | Help |

## Project structure

```
src/
  pages/Home.jsx          menu grid, filters, search, cart
  components/
    Nav.jsx               navbar and search
    Card.jsx              dish card
    Card2.jsx             cart item
    Cart.jsx              cart drawer and totals
    About.jsx, Help.jsx, Log.jsx, Log2.jsx
  redux/
    cartSlice.js          AddItem, RemoveItem, IncrementQty, DecrementQty
    store.js
  context/UserContext.jsx search input and login state
  food.js                 menu data
  category.jsx            category list and icons
```

## Getting started

### Prerequisites
- Node.js 18+

```bash
git clone https://github.com/mayurgarg08/FoodZone.git
cd FoodZone
npm install
npm run dev       # http://localhost:5173
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview the build |
| `npm run lint` | Run ESLint |

## Author

**Mayur Garg** · [GitHub](https://github.com/mayurgarg08) · [LinkedIn](https://www.linkedin.com/in/mayur-garg-428a291b4/)
