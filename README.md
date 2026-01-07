# VES Legal Conclave - Courtroom Management System

A responsive React application for managing courtroom displays during the 1st National Law Fest 2023-24.

## Features

- **Responsive Navbar**: Logo, event heading, and live clock
- **4 Courtroom Panels**: Glassmorphic design with input fields for:
  - Petitioner
  - Respondent
  - Main text area (larger font)
  - Next Match
- **Fully Responsive**: Works on all screen sizes
- **Glassmorphic Design**: Modern glass-effect styling with minimal transparency

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
  ├── components/
  │   ├── Navbar.js
  │   ├── Navbar.css
  │   ├── CourtRoom.js
  │   └── CourtRoom.css
  ├── App.js
  ├── App.css
  ├── index.js
  └── index.css
```

## Background Image

To add a background image, replace `placeholder-bg.jpg` in the root directory. The image will automatically be applied to the background.

## Customization

- Background image: Replace `placeholder-bg.jpg` in the root directory
- Colors: Modify the gradient and colors in `CourtRoom.css`
- Font sizes: Adjust in respective CSS files

