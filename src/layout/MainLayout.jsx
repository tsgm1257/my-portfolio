import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { ScrollSpyProvider } from "../context/ScrollSpyContext.jsx";

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
    <div className="min-h-dvh bg-base-100 text-base-content">
      <ScrollSpyProvider>
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
      </ScrollSpyProvider>
    </div>
  );
}
