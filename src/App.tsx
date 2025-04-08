import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import LayoutAuth from "./auth/LayoutAuth";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import About from "./pages/about";
import Tours from "./pages/tours";
import NewPassword from "./auth/newPassword/NewPassword";
import ForgotPassword from "./auth/forgotPassword/ForgotPassword";
import TourDetail from "./pages/tours/tourDetail";
import LayoutOtherPages from "./otherPages/LayoutOtherPages";
import Hotel from "./pages/hotels";
import CheckOut from "./otherPages/checkout";
import HotelDetail from "./pages/hotels/hotelDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tours/:id" element={<TourDetail />} />
          <Route path="hotels" element={<Hotel />} />
          <Route path="hotels/:id" element={<HotelDetail />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="new-password" element={<NewPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<LayoutOtherPages />}>
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
