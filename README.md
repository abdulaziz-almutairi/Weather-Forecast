# 🌦️ React Weather Forecast App (TypeScript)

A simple, responsive weather forecast application built with **React**, **TypeScript**, and **Tailwind CSS**. It fetches current weather and a 5-day forecast using the **OpenWeatherMap API**.

---

## 🚀 Features

- 🔍 Search weather by city name
- 📍 Use browser geolocation to fetch weather
- 📅 5-day weather forecast
- 📦 Fully typed with TypeScript
- 🎨 Styled with Tailwind CSS
- ✅ Responsive and mobile-friendly
- 🌐 Ready to deploy on Vercel / Netlify

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)

---

## 📂 Folder Structure

```
src/
├── components/         # Reusable components
├── types/              # TypeScript types
├── utils/              # API calls and helpers
├── App.tsx             # Main app component
└── index.tsx
```

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/abdulaziz-almutairi/Weather-Forecast.git
cd Weather-Forecast/
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

- For **Create React App (CRA)**:

```env
REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
```

- For **Vite**:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

4. **Start the development server**

- CRA:

```bash
npm start
```

- Vite:

```bash
npm run dev
```

The app should now be running at `http://localhost:3000`.

---

## 🧪 Available Scripts

```bash
npm start       # CRA: Run app in development mode
npm run dev     # Vite: Run app in development mode
npm run build   # Build the app for production
```

---

## 🌍 Deployment

### Vercel / Netlify Instructions:

1. Push code to GitHub
2. Connect your repo to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/)
3. Add environment variable:

- CRA:

  ```
  REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key
  ```

- Vite:
  ```
  VITE_WEATHER_API_KEY=your_openweathermap_api_key
  ```

4. Build Command:

- CRA: `npm run build`
- Vite: `npm run build`

Output Directory: `build` (CRA) or `dist` (Vite)

---

## 📘 API Reference

Using [OpenWeatherMap API](https://openweathermap.org/api):

- Current Weather:  
  `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

- Forecast (daily):  
  `https://api.openweathermap.org/data/2.5/forecast/daily?q={city}&cnt=5&appid={API_KEY}&units=metric`

---

## 👤 Author

**Abdulaziz Almutairi**  
GitHub: [@abdulaziz-almutairi](https://github.com/abdulaziz-almutairi)
