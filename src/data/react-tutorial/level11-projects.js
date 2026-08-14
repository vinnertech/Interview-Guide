export const level11Projects = {
  id: 'level-11',
  title: 'Level 11: Real-World Guided Projects',
  icon: 'bi-kanban',
  color: '#0d6efd',
  description: 'Hands-on guided projects with complete architectures, requirements, component structures, and code: Live Weather API dashboard with geolocation, and E-Commerce Product Catalog with filter/sort/pagination and shopping cart.',
  chapters: [
    {
      id: 'guided-projects',
      title: '11. Real-World Project Applications',
      lessons: [
        {
          id: 'project-weather-api-dashboard',
          slug: 'project-weather-api-dashboard',
          order: '11.1',
          title: 'Project 1: Live Weather API & Metrics Dashboard',
          subtitle: 'Build a production-quality async REST API application with live city search, temperature units toggle (°C / °F), loading skeleton, and error resilience.',
          chapterId: 'guided-projects',
          chapterTitle: '11. Real-World Project Applications',
          levelTitle: 'Level 11: Real-World Guided Projects',
          goal: 'Build an end-to-end API dashboard integrating useEffect, Fetch API, debounce search, loading skeletons, and error banners in gentle baby steps.',
          prerequisites: [
            'Level 1 through Level 7 completed.'
          ],
          concept: `### Project Architecture & Requirements

\`\`\`text
src/
├── services/
│   └── weatherService.js       <- Open-Meteo Geocoding & Weather REST API calls
├── hooks/
│   └── useWeather.js           <- State management, loading, error, and unit toggle
├── components/weather/
│   ├── WeatherSearch.jsx       <- Search input and unit switch buttons
│   ├── WeatherSkeleton.jsx     <- Smooth shimmer placeholder while fetching
│   └── WeatherCard.jsx         <- Metric card: Temperature, Wind Speed, Humidity, Icon
└── WeatherApp.jsx              <- Master Container Orchestration
\`\`\`

### Complete Features Implemented:
1. **Live Geocoding Search**: Resolves any city name (e.g., Tokyo, London, Mumbai, New York) to latitude & longitude coordinates.
2. **Real-Time Weather Metrics**: Fetches temperature, wind speed, wind direction, and weather condition codes.
3. **Celsius / Fahrenheit Toggle**: Instant unit conversion without re-fetching API data.
4. **Resilient Loading & Error UI**: Displays a polished loading skeleton while loading, and a friendly error alert if a city is not found.`,
          diagram: `flowchart TD
    App["<WeatherApp /> (Master Container)"] --> Hook["useWeather() (Custom Hook)"]
    Hook --> API["weatherService.js (Open-Meteo REST API)"]
    
    App --> Search["<WeatherSearch /> (City Search & °C/°F Toggle)"]
    App --> Skele["<WeatherSkeleton /> (Loading State)"]
    App --> Card["<WeatherCard /> (Temperature & Weather Metrics)"]
    
    style App fill:#cfe2ff,stroke:#084298,color:#084298
    style Hook fill:#d1e7dd,stroke:#198754,color:#0f5132
    style API fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: The Weather API Service Layer (services/weatherService.js)',
              explanation: 'Create a dedicated service to handle geocoding (converting city name to coordinates) and fetching current meteorological data from the free Open-Meteo API.',
              command: `// src/services/weatherService.js
export const weatherService = {
  // Step 1A: Convert City Name -> Latitude & Longitude
  getCoordinates: async (cityName) => {
    const geoUrl = \`https://geocoding-api.open-meteo.com/v1/search?name=\${encodeURIComponent(cityName)}&count=1&language=en&format=json\`;
    const res = await fetch(geoUrl);
    if (!res.ok) throw new Error('Failed to resolve city location.');
    const data = await res.json();
    if (!data.results || data.results.length === 0) {
      throw new Error(\`City "\${cityName}" was not found. Please check your spelling.\`);
    }
    const { name, latitude, longitude, country } = data.results[0];
    return { name, latitude, longitude, country };
  },

  // Step 1B: Fetch Current Weather by Coordinates
  getWeatherByCoords: async (lat, lon) => {
    const weatherUrl = \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}&current_weather=true\`;
    const res = await fetch(weatherUrl);
    if (!res.ok) throw new Error('Failed to fetch weather forecast.');
    const data = await res.json();
    return data.current_weather;
  }
};`
            },
            {
              title: 'Step 2: Custom Hook for Weather State (hooks/useWeather.js)',
              explanation: 'Encapsulate the fetching lifecycle, loading indicators, error messages, and temperature unit toggle inside a custom hook.',
              command: `// src/hooks/useWeather.js
import { useState, useEffect, useCallback } from 'react';
import { weatherService } from '../services/weatherService';

export function useWeather(defaultCity = 'London') {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async (targetCity) => {
    try {
      setLoading(true);
      setError(null);
      
      const geo = await weatherService.getCoordinates(targetCity);
      const current = await weatherService.getWeatherByCoords(geo.latitude, geo.longitude);

      setWeatherData({
        cityName: geo.name,
        country: geo.country,
        tempC: current.temperature,
        windSpeed: current.windspeed,
        windDirection: current.winddirection,
        weatherCode: current.weathercode,
        time: current.time
      });
    } catch (err) {
      setError(err.message || 'An error occurred while fetching weather.');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeather(city);
  }, [city, fetchWeather]);

  const searchCity = (newCity) => {
    if (newCity && newCity.trim()) {
      setCity(newCity.trim());
    }
  };

  const toggleUnit = () => setIsCelsius(prev => !prev);

  // Derived state: calculate Fahrenheit on the fly without extra re-fetching
  const displayTemp = weatherData
    ? (isCelsius ? weatherData.tempC : Number((weatherData.tempC * 9/5 + 32).toFixed(1)))
    : 0;

  return {
    weatherData,
    displayTemp,
    isCelsius,
    toggleUnit,
    loading,
    error,
    searchCity,
    currentCity: city
  };
}`
            },
            {
              title: 'Step 3: Search Bar & Unit Switcher (components/WeatherSearch.jsx)',
              explanation: 'Build the search form component with controlled inputs and unit toggle buttons.',
              command: `// src/components/WeatherSearch.jsx
import React, { useState } from 'react';

export function WeatherSearch({ onSearch, isCelsius, onToggleUnit }) {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      onSearch(inputVal.trim());
      setInputVal('');
    }
  };

  return (
    <div className="d-flex flex-column flex-sm-row gap-2 mb-4 align-items-center justify-content-between">
      <form onSubmit={handleSubmit} className="input-group">
        <span className="input-group-text bg-white border-end-0">
          <i className="bi bi-geo-alt text-primary"></i>
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="Search city (e.g. Tokyo, Paris)..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button className="btn btn-primary px-4" type="submit">
          Search
        </button>
      </form>

      <div className="btn-group" role="group">
        <button
          type="button"
          className={\`btn btn-sm \${isCelsius ? 'btn-primary' : 'btn-outline-primary'}\`}
          onClick={onToggleUnit}
        >
          °C
        </button>
        <button
          type="button"
          className={\`btn btn-sm \${!isCelsius ? 'btn-primary' : 'btn-outline-primary'}\`}
          onClick={onToggleUnit}
        >
          °F
        </button>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 4: Weather Loading Skeleton (components/WeatherSkeleton.jsx)',
              explanation: 'Build an animated placeholder to give users immediate feedback while network requests are in-flight.',
              command: `// src/components/WeatherSkeleton.jsx
import React from 'react';

export function WeatherSkeleton() {
  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 text-center placeholder-glow" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="placeholder col-6 mx-auto mb-3 py-2 rounded"></div>
      <div className="placeholder col-4 mx-auto mb-4 py-4 rounded-circle" style={{ width: '80px', height: '80px' }}></div>
      <div className="placeholder col-3 mx-auto mb-3 py-3 rounded"></div>
      <div className="row g-3 mt-2">
        <div className="col-6"><div className="placeholder col-12 py-3 rounded"></div></div>
        <div className="col-6"><div className="placeholder col-12 py-3 rounded"></div></div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 5: Main Weather Display Card (components/WeatherCard.jsx)',
              explanation: 'Build the weather card displaying temperature, dynamic weather icons, wind speed, and direction.',
              command: `// src/components/WeatherCard.jsx
import React from 'react';

// Helper to map WMO Weather Code to icon and description
function getWeatherCondition(code) {
  if (code === 0) return { label: 'Clear Sky', icon: 'bi-sun-fill text-warning' };
  if (code <= 3) return { label: 'Partly Cloudy', icon: 'bi-cloud-sun-fill text-warning' };
  if (code <= 48) return { label: 'Foggy', icon: 'bi-cloud-fog-fill text-secondary' };
  if (code <= 67) return { label: 'Rainy', icon: 'bi-cloud-rain-fill text-primary' };
  if (code <= 77) return { label: 'Snowy', icon: 'bi-snow text-info' };
  return { label: 'Stormy', icon: 'bi-cloud-lightning-rain-fill text-danger' };
}

export function WeatherCard({ data, displayTemp, isCelsius }) {
  const condition = getWeatherCondition(data.weatherCode);

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 text-center" style={{ backgroundColor: 'var(--card-bg)' }}>
      <h3 className="fw-bold mb-1">
        {data.cityName} <span className="badge bg-light text-dark fs-6 border">{data.country}</span>
      </h3>
      <p className="text-muted small mb-4">{new Date(data.time).toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}</p>

      {/* Main Temperature & Icon */}
      <div className="my-3 d-flex align-items-center justify-content-center gap-3">
        <i className={\`bi \${condition.icon} display-1\`}></i>
        <div>
          <h1 className="display-3 fw-bold mb-0">
            {displayTemp}°{isCelsius ? 'C' : 'F'}
          </h1>
          <span className="text-muted fw-semibold">{condition.label}</span>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="row g-3 mt-4 pt-3 border-top">
        <div className="col-6">
          <div className="p-3 rounded-3 bg-light text-dark">
            <i className="bi bi-wind text-primary fs-4 d-block mb-1"></i>
            <span className="small text-muted d-block">Wind Speed</span>
            <strong className="fs-5">{data.windSpeed} km/h</strong>
          </div>
        </div>
        <div className="col-6">
          <div className="p-3 rounded-3 bg-light text-dark">
            <i className="bi bi-compass text-success fs-4 d-block mb-1"></i>
            <span className="small text-muted d-block">Wind Direction</span>
            <strong className="fs-5">{data.windDirection}°</strong>
          </div>
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 6: Master WeatherApp Container (WeatherApp.jsx)',
              explanation: 'Assemble all modular pieces into a responsive, clean dashboard container.',
              command: `// src/WeatherApp.jsx
import React from 'react';
import { useWeather } from './hooks/useWeather';
import { WeatherSearch } from './components/WeatherSearch';
import { WeatherSkeleton } from './components/WeatherSkeleton';
import { WeatherCard } from './components/WeatherCard';

export default function WeatherApp() {
  const {
    weatherData,
    displayTemp,
    isCelsius,
    toggleUnit,
    loading,
    error,
    searchCity
  } = useWeather('London');

  return (
    <div className="container py-5" style={{ maxWidth: '560px' }}>
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary mb-1">Live Weather Dashboard</h2>
        <p className="text-muted">Real-time global meteorological forecasts</p>
      </div>

      <WeatherSearch
        onSearch={searchCity}
        isCelsius={isCelsius}
        onToggleUnit={toggleUnit}
      />

      {error && (
        <div className="alert alert-danger rounded-4 d-flex align-items-center gap-2 mb-4">
          <i className="bi bi-exclamation-triangle-fill fs-5"></i>
          <div>{error}</div>
        </div>
      )}

      {loading ? (
        <WeatherSkeleton />
      ) : weatherData ? (
        <WeatherCard
          data={weatherData}
          displayTemp={displayTemp}
          isCelsius={isCelsius}
        />
      ) : null}
    </div>
  );
}`
            }
          ],
          verification: 'Run your WeatherApp component, search for different global cities (e.g. "Paris", "Sydney", "Cairo"), and toggle between °C and °F to verify instant conversion.',
          expectedResult: 'Weather data is successfully retrieved, loading skeletons appear during network calls, and errors are cleanly handled.',
          summary: 'You have built an end-to-end asynchronous Weather Dashboard with geocoding, custom hooks, loading skeletons, and derived unit conversions.'
        },
        {
          id: 'project-ecommerce-product-catalog',
          slug: 'project-ecommerce-product-catalog',
          order: '11.2',
          title: 'Project 2: E-Commerce Product Catalog & Cart',
          subtitle: 'Build a full-featured e-commerce store with category filtering, price range sorting, and a live Shopping Cart drawer with Context API.',
          chapterId: 'guided-projects',
          chapterTitle: '11. Real-World Project Applications',
          levelTitle: 'Level 11: Real-World Guided Projects',
          goal: 'Build an interactive E-Commerce catalog with React Context for shopping cart state, category filters, and checkout calculations in gentle baby steps.',
          prerequisites: [
            'Level 8 (Context API) completed.'
          ],
          concept: `### E-Commerce Architecture & Cart State Management

\`\`\`text
src/
├── context/
│   └── CartContext.jsx         <- Global cart state (items, addItem, removeItem, total)
├── components/catalog/
│   ├── CatalogFilter.jsx       <- Category pill filters & price sort dropdown
│   ├── ProductCard.jsx         <- Product image, badge, price, and "Add to Cart" button
│   └── CartDrawer.jsx          <- Slide-over cart summary with quantity +/- buttons
└── ProductCatalogApp.jsx       <- Master Catalog Container
\`\`\`

### Key Features Implemented:
- **Global Shopping Cart**: React Context tracks cart items, item quantities, and subtotal calculations across all components.
- **Category & Price Filtering**: Instant client-side filtering without reloading.
- **Quantity Adjustments**: Increment, decrement, and remove items with automatic recalculation of total cost.`,
          diagram: `flowchart TD
    App["<ProductCatalogApp />"] --> CartCtx["CartProvider (Context API)"]
    CartCtx --> Filter["<CatalogFilter /> (Category & Price Sort)"]
    CartCtx --> Grid["<ProductGrid /> -> <ProductCard />"]
    CartCtx --> Drawer["<CartDrawer /> (Cart Items & Subtotal)"]
    
    style App fill:#cfe2ff,stroke:#084298,color:#084298
    style CartCtx fill:#d1e7dd,stroke:#198754,color:#0f5132
    style Drawer fill:#fff3cd,stroke:#ffc107,color:#664d03`,
          steps: [
            {
              title: 'Step 1: Global Shopping Cart Context (context/CartContext.jsx)',
              explanation: 'Create a Context Provider that manages cart items, adding, removing, updating quantities, and computing item counts and grand totals.',
              command: `// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }, [cartItems]);

  const totalCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      totalAmount,
      totalCount,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`
            },
            {
              title: 'Step 2: Product Card Component (components/ProductCard.jsx)',
              explanation: 'Build the individual product presentation card with image, category badge, formatted price, and "Add to Cart" trigger.',
              command: `// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden" style={{ backgroundColor: 'var(--card-bg)' }}>
      <div className="p-4 text-center bg-light">
        <i className={\`bi \${product.icon || 'bi-box-seam'} display-3 text-primary\`}></i>
      </div>
      <div className="card-body p-4 d-flex flex-column justify-content-between">
        <div>
          <span className="badge bg-secondary bg-opacity-10 text-secondary border px-2 py-1 rounded-pill mb-2">
            {product.category}
          </span>
          <h5 className="fw-bold mb-1">{product.name}</h5>
          <p className="text-muted small mb-3">{product.description}</p>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
          <h4 className="fw-bold text-primary mb-0">\${product.price.toFixed(2)}</h4>
          <button
            className="btn btn-primary rounded-pill px-3 d-flex align-items-center gap-2"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus"></i>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 3: Slide-Over Cart Drawer (components/CartDrawer.jsx)',
              explanation: 'Build the interactive slide-over cart drawer with quantity increments, removals, subtotal, and simulated checkout.',
              command: `// src/components/CartDrawer.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    totalAmount
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1060 }}>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-end" style={{ margin: '0 0 0 auto', height: '100%', maxWidth: '420px' }}>
        <div className="modal-content h-100 rounded-0 border-0 shadow-lg">
          <div className="modal-header border-bottom">
            <h5 className="modal-title fw-bold">
              <i className="bi bi-bag-check-fill text-primary me-2"></i>
              Shopping Cart ({cartItems.length})
            </h5>
            <button type="button" className="btn-close" onClick={() => setIsCartOpen(false)}></button>
          </div>

          <div className="modal-body p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-5">
                <i className="bi bi-cart-x display-2 text-muted mb-3"></i>
                <h5>Your cart is empty.</h5>
                <p className="text-muted small">Explore the catalog and add some products!</p>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center justify-content-between p-3 rounded-3 border bg-light">
                    <div>
                      <h6 className="fw-bold mb-1">{item.name}</h6>
                      <span className="text-muted small">\${item.price.toFixed(2)} each</span>
                    </div>

                    <div className="d-flex align-items-center gap-2">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span className="btn btn-light px-3 fw-bold">{item.quantity}</span>
                        <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="modal-footer border-top d-flex flex-column gap-2 p-4">
              <div className="d-flex justify-content-between w-100 fs-5 fw-bold">
                <span>Subtotal:</span>
                <span className="text-primary">\${totalAmount.toFixed(2)}</span>
              </div>
              <button
                className="btn btn-primary btn-lg w-100 rounded-pill mt-2"
                onClick={() => alert(\`Order confirmed! Total: $\${totalAmount.toFixed(2)}\`)}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}`
            },
            {
              title: 'Step 4: Master Catalog Page (ProductCatalogApp.jsx)',
              explanation: 'Assemble the product catalog with category filter pills, price sorting, and cart drawer toggles.',
              command: `// src/ProductCatalogApp.jsx
import React, { useState, useMemo } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Mechanical Keyboard', category: 'Accessories', price: 129.99, icon: 'bi-keyboard', description: 'RGB hot-swappable switches.' },
  { id: 2, name: 'Wireless Ergonomic Mouse', category: 'Accessories', price: 79.99, icon: 'bi-mouse', description: 'Precision optical sensor.' },
  { id: 3, name: '4K Ultra HD Monitor', category: 'Displays', price: 399.99, icon: 'bi-display', description: '144Hz IPS panel.' },
  { id: 4, name: 'Noise-Canceling Headphones', category: 'Audio', price: 249.99, icon: 'bi-headphones', description: 'Active noise cancellation.' },
  { id: 5, name: 'USB-C Multiport Hub', category: 'Accessories', price: 49.99, icon: 'bi-usb-symbol', description: 'HDMI, Ethernet, and USB-3.' }
];

function CatalogView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const { totalCount, setIsCartOpen } = useCart();

  const categories = ['All', 'Accessories', 'Displays', 'Audio'];

  const filteredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS
      .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
      .sort((a, b) => sortOrder === 'lowToHigh' ? a.price - b.price : b.price - a.price);
  }, [selectedCategory, sortOrder]);

  return (
    <div className="container py-5">
      {/* Header & Cart Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Developer Store</h2>
          <p className="text-muted mb-0">High-performance gear for software engineers</p>
        </div>
        <button
          className="btn btn-primary rounded-pill px-4 position-relative d-flex align-items-center gap-2"
          onClick={() => setIsCartOpen(true)}
        >
          <i className="bi bi-cart3 fs-5"></i>
          <span>Cart</span>
          {totalCount > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
            </span>
          )}
        </button>
      </div>

      {/* Filter & Sort Controls */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 mb-4 p-3 rounded-4 bg-light">
        <div className="btn-group">
          {categories.map(cat => (
            <button
              key={cat}
              className={\`btn btn-sm \${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'}\`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="form-select form-select-sm w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <CartDrawer />
    </div>
  );
}

export default function ProductCatalogApp() {
  return (
    <CartProvider>
      <CatalogView />
    </CartProvider>
  );
}`
            }
          ],
          verification: 'Add products to your cart, open the cart drawer, increase quantities, delete items, and observe the subtotal calculating dynamically.',
          expectedResult: 'Shopping Cart context updates seamlessly across all product cards and drawer modals.',
          summary: 'You have built an interactive E-Commerce Catalog and Cart using React Context API for global state management.'
        }
      ]
    }
  ]
};
