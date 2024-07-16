import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './header1/Header.jsx';
import Body from './main/Body.jsx';
// import Footer from './footer/Footer.jsx';
import ProductBody from './product/Body.jsx';
import BodyProDetail from './ProductDetail/Bodyprodetail.jsx'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/product-body" element={<ProductBody />}/>
        <Route path='/ProDetail' element={<BodyProDetail/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
