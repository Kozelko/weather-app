# Weather App 🌤️

[![Deploy to GitHub Pages](https://github.com/Kozelko/weather-app/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Kozelko/weather-app/actions/workflows/pages/pages-build-deployment)

Live Demo: <a href="https://Kozelko.github.io/weather-app/" target="_blank">https://Kozelko.github.io/weather-app/</a>

A modern, responsive weather application built with Vanilla JavaScript and Webpack. It fetches real-time weather data from the Visual Crossing Weather API and displays it in a clean, glassmorphism-style interface.

## Features

- **Search by City:** Get current weather conditions for any city worldwide.
- **Detailed Metrics:** Displays temperature, weather description, humidity, wind speed, and conditions.
- **Unit Toggle:** Switch seamlessly between Metric (°C) and Imperial (°F) units without re-fetching data.
- **Loading State:** Visual feedback while data is being fetched.
- **Error Handling:** Graceful error messages for invalid cities or network issues.
- **Responsive Design:** Looks great on desktop and mobile devices.

## Technologies Used

- **JavaScript (ES6+):** Core logic, async/await for API calls.
- **Webpack:** Module bundling, asset management, and development server.
- **HTML5 & CSS3:** Semantic markup and custom styling with Flexbox and CSS variables.
- **Visual Crossing Weather API:** Source for weather data.
- **ESLint & Prettier:** For code quality and formatting.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Kozelko/weather-app.git
    cd weather-app
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the root directory and add your API key:
    ```env
    API_KEY=your_visual_crossing_api_key_here
    ```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Production Build

Build the project for production (outputs to `dist/` folder):

```bash
npm run build
```

### Deployment

Deploy to GitHub Pages:

```bash
npm run deploy
```

## License 📄

This project is licensed under the ISC License.
