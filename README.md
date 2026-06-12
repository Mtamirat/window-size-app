# Window Size Tracker React Application

## Overview

This project demonstrates the creation and use of a custom React hook called `useWindowSize`. The hook tracks the browser window's width and height and updates automatically whenever the window is resized.

The application uses this information to display either a Mobile Layout or a Desktop Layout based on the current screen width.

## Features

* Custom React hook (`useWindowSize`)
* Real-time window width and height tracking
* Responsive layout switching
* Mobile and Desktop view detection
* Event listener cleanup to prevent memory leaks

## Technologies Used

* React
* JavaScript
* Vite
* HTML
* CSS

## Project Structure

src/

* hooks/

  * useWindowSize.js
* App.jsx
* main.jsx

## How to Run the Project

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd window-size-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL provided by Vite in your browser.

## Test Cases

### Normal Test Cases

1. Width: 1200px

   * Expected: Desktop Layout
   * Result: Pass

2. Width: 900px

   * Expected: Desktop Layout
   * Result: Pass

3. Width: 700px

   * Expected: Mobile Layout
   * Result: Pass

### Edge Test Cases

1. Width: 768px

   * Expected: Desktop Layout
   * Result: Pass

2. Width: 767px

   * Expected: Mobile Layout
   * Result: Pass

3. Width: 320px

   * Expected: Mobile Layout
   * Result: Pass

## Author

Michael Tamirat
