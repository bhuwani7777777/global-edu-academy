import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

/* AUTH */
import Login from "./pages/Login";
import Register from "./pages/Register";

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
import AdminDashboard from "./pages/AdminDashboard";
import AdminAdmissions from "./pages/AdminAdmissions";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Payments from "./pages/Payments";
import Settings from "./pages/Settings";

/* 404 */
function NotFound() {

  return (

    <div className="notfound-page">

      <div className="notfound-card">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for
          does not exist.
        </p>

      </div>

    </div>

  );
}

/* APP CONTENT */
function AppContent() {

  const location = useLocation();

  /* HIDE LAYOUT */
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith(
      "/admin"
    ) ||
    location.pathname ===
      "/admindashboard" ||
    location.pathname ===
      "/adminadmissions";

  return (
    <>

      {!hideLayout && <Navbar />}

      <div className="app-wrapper">

        <Routes>

          {/* AUTH */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          {/* PUBLIC */}
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/academics"
            element={<Academics />}
          />

          <Route
            path="/classes"
            element={<Classes />}
          />

          <Route
            path="/admissions"
            element={<Admissions />}
          />

          <Route
            path="/notices"
            element={<Notices />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* ADMIN */}
          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/admindashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/adminadmissions"
            element={<AdminAdmissions />}
          />

          <Route
            path="/admin/students"
            element={<Students />}
          />

          <Route
            path="/admin/teachers"
            element={<Teachers />}
          />

          <Route
            path="/admin/payments"
            element={<Payments />}
          />

          <Route
            path="/admin/settings"
            element={<Settings />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

      {!hideLayout && <Footer />}

      {!hideLayout && (
        <WhatsAppButton />
      )}

    </>
  );
}

/* MAIN APP */
export default function App() {

  return (

    <BrowserRouter>

      <AppContent />

    </BrowserRouter>

  );
}