import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { ScrollToTop } from './components/index.jsx'
import { FilterProvider } from './context/filterContext.jsx'

 import { ToastContainer, toast } from 'react-toastify';
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      
      <FilterProvider>
      <ScrollToTop/>
      <ToastContainer />
      <CartProvider>
      
    <App />
    
    </CartProvider>
    </FilterProvider>
    </Router>
  </StrictMode>,
)
