// import logo from "../../../assets/logos/logo.png";
import logo from "../../../assets/logos/newLogo.png";
import phoneIcon from "../../../assets/icons/phone.png";
import mailIcon from "../../../assets/icons/mail.png";
import locationIcon from "../../../assets/icons/location.png";
import instaIcon from "../../../assets/icons/Insta.png";
import fbIcon from "../../../assets/icons/Fb.png";
import twiterIcon from "../../../assets/icons/Twiter.png";
import pinterestIcon from "../../../assets/icons/Pintrest.png";
import { NavLink } from "react-router";

const Footer = () => {
  const navItems = [
    { title: "Terms & Conditions", route: "/terms&conditions" },
    { title: "Privacy Policy", route: "/privacy-policy" },
    { title: "Refund Policy", route: "/refund-policy" },
  ];
  return (
    <div>
      <div className="px-6 md:px-24 py-6 md:py-16 flex flex-col md:flex-row items-center justify-between text-white gap-10 md:gap-0">
        <div className="text-center md:text-left md:w-1/4">
          <img
            src={logo}
            alt="IPTV"
            className="w-[281px] h-[91px] mx-auto md:mx-0"
          />
          {/* <p className="font-[400] pt-6">
            Lorem ipsum dolor sit amet consectetur. Mattis imperdiet auctor
            vestibulum vel elementum suspendisse faucibus enim. Enim lacus dolor
            elementum tortor augue nunc id ultricies.{" "}
          </p> */}
        </div>
        <div>
          <h2 className="text-[30px]">Contact Us</h2>
          {/* email */}
          <div className="my-4 flex items-center gap-3 font-[400]">
            <img src={mailIcon} alt="mail" className="w-[44px]" />
            <div>
              <p className="text-[20px] font-[700]">Mail Us</p>
              <p>Support@ChipSetTV.com</p>
            </div>
          </div>
          {/* phone */}
          <div className="my-4 flex items-center gap-3 font-[400]">
            <img src={phoneIcon} alt="phone" className="w-[44px]" />
            <div>
              <p className="text-[20px] font-[700]">Call Us</p>
              <p>1•833•3•LIVE•TV</p>
            </div>
          </div>
          {/* <div className="my-4 flex items-center gap-3 font-[400]">
            <img src={locationIcon} alt="location" className="w-[44px]" />
            <div>
              <p className="text-[20px] font-[700]">Location</p>
              <p>abc street 123</p>
            </div>
          </div> */}
        </div>
      </div>

      <hr />

      <div className="px-6 md:px-24 py-4 flex items-center justify-between text-[#949494] font-[400]">
        <div>&copy;ChipSetTV</div>

        <div className="hidden md:flex items-center gap-10 text-[20px]">
          {navItems.map((nav, idx) => (
            <NavLink key={idx} to={nav?.route} className={({ isActive }) => ``}>
              {nav.title}
            </NavLink>
          ))}
        </div>
        <div className=" flex items-center gap-3">
          <p className="text-[18px]">Follow Us:</p>
          <img src={instaIcon} alt="Instagram" className="w-[17px]" />
          <img src={fbIcon} alt="Facebook" className="w-[17px]" />
          <img src={twiterIcon} alt="Twiter" className="w-[17px]" />
          <img src={pinterestIcon} alt="Pintrest" className="w-[17px]" />
        </div>
      </div>
      <div className="flex md:hidden items-center gap-3 md:gap-10 md:text-[20px] text-[#949494] justify-center my-6">
        {navItems.map((nav, idx) => (
          <NavLink key={idx} to={nav?.route} className={({ isActive }) => ``}>
            {nav.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Footer;
