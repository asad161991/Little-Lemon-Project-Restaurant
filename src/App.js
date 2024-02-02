import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import BookingPage from "./pages/BookingPage";
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";
import OrderOnline from "./pages/OrderOnline";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
