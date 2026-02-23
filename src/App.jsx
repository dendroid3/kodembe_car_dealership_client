import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryPage from './components/salvage/InventoryPage';
import CarDetailsPage from './components/salvage/CarDetailsPage';
import AdminLoginPage from './components/salvage/AdminLoginPage';
import AdminCarsPage from './components/salvage/AdminCarsPage';

const App = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
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
