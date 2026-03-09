import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryPage from './components/salvage/InventoryPage';
import CarDetailsPage from './components/salvage/CarDetailsPage';
import AdminLoginPage from './components/salvage/AdminLoginPage';
import AdminCarsPage from './components/salvage/AdminCarsPage';

const THEME_STORAGE_KEY = 'theme_mode';

const App = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/cars" element={<AdminCarsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
