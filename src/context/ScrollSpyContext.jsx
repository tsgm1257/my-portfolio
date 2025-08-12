import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";

const ScrollSpyContext = createContext({ current: null });

export function ScrollSpyProvider({
  children,
  ids = ["about", "skills", "education", "projects", "contact"],
  offset = 80,
}) {
  const [current, setCurrent] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setCurrent(null);
      return;
    }

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCurrent(entry.target.id);
        });
      },
      {
        rootMargin: `-${offset}px 0px -70% 0px`,
        threshold: 0.1,
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [location.pathname, ids, offset]);

  const value = useMemo(() => ({ current }), [current]);
  return (
    <ScrollSpyContext.Provider value={value}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

export function useScrollSpy() {
  return useContext(ScrollSpyContext);
}
