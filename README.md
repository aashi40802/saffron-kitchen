# Saffron Kitchen — Restaurant Website

## Overview

A multi-page restaurant website built for Week 4 of The Developers Arena web development internship. The site is for "Saffron Kitchen", a modern Indian restaurant. It has 4 pages, responsive design, form validation, a menu filter, and is deployed on GitHub Pages.

## Pages

- **Home (index.html)** — Hero section, featured dishes, about preview, hours/location/contact info
- **Menu (menu.html)** — Full menu with category filter buttons (All, Starters, Mains, Breads, Desserts, Drinks)
- **About (about.html)** — Restaurant story, values, team members
- **Contact (contact.html)** — Contact info, message form with validation, reservation booking form with date/time/guests

## Features

- Responsive design — works on desktop, tablet, and mobile
- Frosted glass navigation bar with hamburger menu on mobile
- Menu category filter — JavaScript filters items by clicking category buttons
- Contact form with real-time validation (name, email, message)
- Reservation form with date picker, time select, guest count, and validation
- Success states for both forms after valid submission
- Hover effects on dish cards and menu items
- Playfair Display serif font for headings, Inter for body text

## How to Run

1. Clone the repo
2. Open `index.html` in a browser or use Live Server in VS Code
3. No dependencies or build tools needed

## File Structure

- index.html — Home page
- menu.html — Menu page
- about.html — About page
- contact.html — Contact and reservation page
- css/style.css — All styles
- js/script.js — All JavaScript
- images/ — Photos and screenshots
- README.md — This file

## Tech Used

- HTML5 with semantic markup
- CSS3 with custom properties, Flexbox, Grid, media queries
- Vanilla JavaScript for DOM manipulation, form validation, menu filtering
- Google Fonts (Inter + Playfair Display)
- Deployed on GitHub Pages

## JS Concepts

- querySelector, querySelectorAll for element selection
- addEventListener for click, input, change events
- classList (add, remove, toggle) for state management
- getAttribute for reading data-category and data-filter
- Reusable validateField() and resetForm() functions
- Date input min attribute set dynamically with JavaScript
- closest() for finding parent form card element

## Testing

- Tested on Chrome and Firefox
- Responsive at 375px, 768px, 1440px
- Both forms tested with empty, invalid, and valid inputs
- Menu filter tested for all categories
- Navigation works across all 4 pages

## Deployment

Deployed on GitHub Pages at: https://aashi40802.github.io/saffron-kitchen/

## Author

Aashi Gupta
The Developers Arena — June 2026 Batch
