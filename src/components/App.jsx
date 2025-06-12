import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PreviousOrders from './components/PreviousOrders';
import PageNotFound from './components/PageNotFound';
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