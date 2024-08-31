import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import AllProducts from './Pages/AllProducts';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public Route */}
          <Route path='/login' element={<Login />} />
          {/* Protected Routes */}
          <Route path='/' element={<ProtectedRoute element={<Shop />} />} />
          <Route path='/about' element={<ProtectedRoute element={<AboutUs category="about" />} />} />
          <Route path='/contact' element={<ProtectedRoute element={<ContactUs category="contact" />} />} />
          <Route path='/allproducts/:category' element={<ProtectedRoute element={<AllProducts />} />} />
          <Route path='/cart' element={<ProtectedRoute element={<Cart />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;
