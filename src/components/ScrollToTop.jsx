import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 👇 Κάθε φορά που αλλάζει route, scroll στην κορυφή
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // πιο γρήγορο από smooth για αλλαγή σελίδας
    });
  }, [pathname]);

  return null;
}
