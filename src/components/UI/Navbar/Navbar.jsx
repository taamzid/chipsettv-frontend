import { NavLink } from "react-router";
// import logo from "../../../assets/logos/logo.png";
import logo from "../../../assets/logos/newLogo.png";
import PrimaryButton from "../../Button/PrimaryButton";
import arrowIcon from "../../../assets/icons/arrow.png";
import menuIcon from "../../../assets/icons/menu.png";
import { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ scrollToPricing, scrollToHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const navItems = [
    { title: "Home", route: "#", onClick: scrollToHome },
    { title: "Channels", route: "/channel" },
    { title: "Pricing", route: "#", onClick: scrollToPricing },
    { title: "Faq", route: "/faq" },
  ];
  const navItemsForSmallDevices = [
    { title: "Home", route: "/", onClick: scrollToHome },
    { title: "Channels", route: "/channel" },
    // { title: "Pricing", route: "#", onClick: scrollToPricing },
    { title: "Faq", route: "/faq" },
    { title: "Affiliate Program", route: "/affiliate-program" },
    { title: "Contact Us", route: "/contact-us" },
    { title: "Privacy Policy", route: "/privacy-policy" },
    { title: "Terms & Conditions", route: "/terms&conditions" },
    { title: "Refund Policy", route: "/refund-policy" },
    { title: "Installation", route: "/installation" },
  ];
  return (
    <div className="px-6 md:px-10 lg:px-32 py-6 md:py-8 lg:py-[50px] sticky w-full top-0 z-[20] bg-black">
      <div className="flex items-center justify-between z-[100]">
        <NavLink to="/">
          <div>
            <img
              src={logo}
              alt="IPTV"
              className="w-[114px] md:w-[220px] lg:w-[281px] h-[37px] md:h-auto lg:h-[91px] "
            />
          </div>
        </NavLink>

        <div className="lg:flex items-center gap-10 lg:gap-4 xl:gap-10 text-[20px] text-white hidden ">
          {navItems.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.route}
              onClick={nav.onClick || (() => {})}
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:block">
          <PrimaryButton icon={arrowIcon} linkTo={"/contact-us"}>
            Contact Us
          </PrimaryButton>
        </div>

        <div className="lg:hidden">
          <button
            className="text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <RxCross2 className="text-white text-2xl md:text-3xl" />
            ) : (
              <img
                src={menuIcon}
                alt="Menu"
                className="w-[24px] md:w-[32px] h-[24px] md:h-[32px] "
              />
            )}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[70%] md:w-[50%] shadow-lg z-[150] transition-transform duration-300 transform bg-black text-white p-6 lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <img
              src={logo}
              alt="IPTV"
              className="w-[114px] md:w-[281px] h-[37px] md:h-[91px] "
            />
          </div>

          <button
            className=" text-2xl md:text-3xl text-[#F47108]"
            onClick={() => setMobileMenuOpen(false)}
          >
            <RxCross2 className="" />
          </button>
        </div>

        <div className="flex flex-col my-10 items-center gap-4 text-[20px] ">
          {navItemsForSmallDevices.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.route}
              onClick={(nav.onClick || (() => {}), ()=>setMobileMenuOpen(false))}
              className={({ isActive }) => ``}
            >
              {nav.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
