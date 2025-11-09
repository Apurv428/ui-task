import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/common/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const MobileDashboard = lazy(() => import("./pages/MobileDashboard"));

function App() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      {isMobile ? <MobileDashboard /> : <Dashboard />}
    </Suspense>
  );
}

export default App;
