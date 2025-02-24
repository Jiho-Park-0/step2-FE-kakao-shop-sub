import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useDispatch } from 'react-redux';
import { setEmailandPassword } from './store/slices/userSlice';
import MainLayout from './layouts/MainLayout';
import RequiredAythLayout from './layouts/RequiredAuthLayout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import 'tailwindcss/tailwind.css';
import OrderPage from './pages/OrderPage';
import OrderResultPage from './pages/OrderResultPage';

function App() {
  const dispatch = useDispatch();

  const staticServerUri = process.env.REACT_APP_PATH || "";

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
          <Route path={staticServerUri + "/login"} element={<LoginPage onLogin={handleLogin} />} />
          <Route path={staticServerUri + "/signup"} element={<RegisterPage />} />
        </Routes>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={staticServerUri + "/"} element={<HomePage />} />
            {/* <Route path="/cart" element={<CartPage />} /> */}
            <Route path={staticServerUri + "/products/:id"} element={<ProductDetailPage />} />
            <Route path={staticServerUri + "/error"} element={<ErrorPage />} />
          </Route>

          {/* 사용자가 로그인 됐을 때만 접근 가능한 레이아웃*/}
          <Route element={<RequiredAythLayout />}>
            <Route path={staticServerUri + "/cart"} element={<CartPage />} />
            <Route path={staticServerUri + "/order"} element={<OrderPage />} />
            <Route path={staticServerUri + "/orders/:id"} element={<OrderResultPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
