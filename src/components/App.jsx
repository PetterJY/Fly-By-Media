import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import PreviousOrders from './PreviousOrders/PreviousOrders';
import PageNotFound from './PageNotFound/PageNotFound';
import '../index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={"/home"} replace />} />
        <Route path="home" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="previous-orders" element={<PreviousOrders />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

function Root() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;