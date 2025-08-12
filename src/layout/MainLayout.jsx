import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { ScrollSpyProvider } from "../context/ScrollSpyContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // wait for page/section to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    } else {
      // new page without hash → scroll to top
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-dvh bg-transparent text-base-content">
      <ScrollSpyProvider>
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
      </ScrollSpyProvider>
      
      {/* Global toasts */}
      <ToastContainer
        position="top-center"
        autoClose={3500}
        newestOnTop
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        theme="light"
      />
    </div>
  );
}
