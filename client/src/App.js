import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Classes from "./pages/Classes";
import Admissions from "./pages/Admissions";
import Notices from "./pages/Notices";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

/* 404 PAGE */
function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>Page Not Found</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Admin />} />

        {/* FALLBACK */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}