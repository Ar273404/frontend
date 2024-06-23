import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import LoginPage from './pages/SignLogin/LoginPage';
import SignupPage from './pages/SignLogin/SignUpPage';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="app">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignupPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path = "/contact-us" element ={<ContactUs/>}/>
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
