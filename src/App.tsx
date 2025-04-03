import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutPage from "./pages/layout";
import Home from "./pages/home";
import Product from "./pages/product";
import LayoutAuth from "./auth/LayoutAuth";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import About from "./pages/about";
import Tours from "./pages/tours";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="tours" element={<Tours />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/auth" element={<LayoutAuth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
