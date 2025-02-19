import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Index from './pages/Index';
import Products from './pages/Products';
import Service from './pages/Service';
// import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
       
          <Route path="/" element={<Index/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/services" element={<Service/>}></Route>
         

          {/* <Route path='/logout' element={<Logout/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route> */}
          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
