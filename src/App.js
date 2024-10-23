import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Product from './component/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Your component
const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  </Router>
);

export default App;

