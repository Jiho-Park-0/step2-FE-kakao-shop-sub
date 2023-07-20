import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { setEmailandPassword } from './store/slices/userSlice';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import 'tailwindcss/tailwind.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      dispatch(setEmailandPassword({ email: storedEmail, password: storedPassword }));
    }
  }, [dispatch]);

  const handleLogin = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    dispatch(setEmailandPassword({ email, password }));
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* 단독 레이아웃 */}

        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
