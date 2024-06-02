import React, {useState, useEffect} from 'react';
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import Products from "./components/Products";
import Nav from './components/Nav';
import Cart from './components/Cart';


import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FullGallery from './components/FullGallery';

const App = () => {
    const [storageLength, setStorageLength] = useState(localStorage.length);

    useEffect(() => {
      const handleStorageChange = (e: StorageEvent) => {
        if (e.key !== null) {
          setStorageLength(localStorage.length);
        }
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);
  
    const refreshStorage = () => {
      setStorageLength(localStorage.length);
    };

    return (
        <div>
            <BrowserRouter>
            <Nav storageLength={storageLength}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/produkti" element={<Products refreshStorage={refreshStorage} />} />
                    <Route path="/gallery" element={<FullGallery />} />
                    <Route path="/cart" element={<Cart refreshStorage={refreshStorage}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;