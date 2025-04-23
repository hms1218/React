import './App.css';
import { Parent } from './Parent';
import { UserProvider } from './UserContext';
import { ThemeProvider } from './ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ProductList } from './pages/ProductList';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { CartPage } from './pages/CartPage';

function App() {
  
  return (
    // <ThemeProvider>
    //   <ThemeSwitcher />
    // </ThemeProvider>
    // <ProductList />
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  )
}

export default App;
