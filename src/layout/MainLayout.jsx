import { Outlet, useLocation } from "react-router";
import Footer from "../components/UI/Footer/Footer";
import { useEffect, useRef } from "react";
import NavBarShared from "../components/UI/Navbar/NavBarShared";

const MainLayout = () => {
  const pricingRef = useRef(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto">
      {location.pathname !== "/" && <NavBarShared />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
