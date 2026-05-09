import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* PUBLIC PAGES */
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Classes from "./pages/Classes";
import Admissions from "./pages/Admissions";
import Notices from "./pages/Notices";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

/* ADMIN PAGES */
import Admin from "./pages/Admin";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import AdmissionsAdmin from "./pages/Admissions";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";

/* 404 PAGE */
function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN WRAPPER */}
      <main className="app-main">

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

          {/* ADMIN ROUTES */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/students" element={<Students />} />
          <Route path="/admin/teachers" element={<Teachers />} />
          <Route path="/admin/admissions" element={<AdmissionsAdmin />} />
          <Route path="/admin/payments" element={<Payments />} />
          <Route path="/admin/settings" element={<Settings />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </main>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}