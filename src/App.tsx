import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./auth/forgotPassword/ForgotPassword";
import LayoutAuth from "./auth/LayoutAuth";
import Login from "./auth/login/Login";
import NewPassword from "./auth/newPassword/NewPassword";
import Register from "./auth/register/Register";
import HotelCheckOut from "./otherPages/hotelCheckout";
import LayoutOtherPages from "./otherPages/LayoutOtherPages";
import ThankYou from "./otherPages/thanks";
import TourCheckOut from "./otherPages/tourCheckout";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Hotel from "./pages/hotel";
import HotelDetail from "./pages/hotel/hotelDetail";
import LayoutPage from "./pages/layout";
import Tours from "./pages/tour";
import TourDetail from "./pages/tour/tourDetail";
import PrivatePolicy from "./pages/privatePolicy";
import NotFoundPage from "./otherPages/notFoundPage";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import ScrollPage from "./components/scrollTop/ScrollPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LayoutTest from "./test/LayoutTest";
import TestQuery from "./test/contact";

function App() {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="tours" element={<Tours />} />
            <Route path="tour-detail/:id" element={<TourDetail />} />
            <Route path="hotels" element={<Hotel />} />
            <Route path="hotel-detail/:id" element={<HotelDetail />} />
            <Route path="private-policy" element={<PrivatePolicy />} />
          </Route>

          <Route path="/auth" element={<LayoutAuth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path="/" element={<LayoutOtherPages />}>
            <Route path="tour-checkout" element={<TourCheckOut />} />
            <Route path="hotel-checkout" element={<HotelCheckOut />} />
            <Route path="thanks" element={<ThankYou />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/test" element={<LayoutTest />}>
            <Route index element={<TestQuery />} />
          </Route>
        </Routes>
        <ScrollPage />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default App;
