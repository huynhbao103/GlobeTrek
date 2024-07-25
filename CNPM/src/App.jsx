import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './main/Body.jsx';
import ProductBody from './product/Body.jsx';
import BodyProDetail from './ProductDetail/Bodydetail.jsx';
import BodyPay from './Payment/bodyPay.jsx';
import BookingForm from './Payment/BookingForm.jsx';
import { DateProvider } from './ProductDetail/DateContext.jsx'; // Đảm bảo đường dẫn chính xác
import Payment from './Payment/Payment.jsx';
import MainLayout  from './YourAccount/MainLayout.jsx'



function App() {
  return (
    <DateProvider>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product-body" element={<ProductBody />} />
          <Route path="/ProDetail" element={<BodyProDetail />} />
          <Route path="/bodyPay" element={<BodyPay />} />
          <Route path='/BookingForm' element={<BookingForm/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/MainLayout' element={<MainLayout />}/>

          
          
        </Routes>
        {/* <Footer /> */}
      </Router>
    </DateProvider>
  );
}

export default App;
