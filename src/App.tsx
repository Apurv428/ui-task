import React, { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import MobileDashboard from "./pages/MobileDashboard";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileDashboard /> : <Dashboard />;
}

export default App;
