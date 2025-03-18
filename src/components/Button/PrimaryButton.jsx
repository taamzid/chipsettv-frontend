import React from "react";
import { Link } from "react-router-dom"; // Changed to react-router-dom if using for routing

const PrimaryButton = ({ children, icon, linkTo, scrollTo }) => {
    const handleClick = (e) => {
        if (scrollTo) {
            e.preventDefault();
            const targetElement = document.getElementById(scrollTo);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return linkTo ? (
        <Link to={linkTo}>
            <button
                className="flex items-center gap-1 bg-[#E8682B] px-8 rounded-full py-1.5 text-white text-[14px] md:text-[20px] h-[39px] md:h-[55px]"
                onClick={handleClick}
            >
                {children}
                <img src={icon} alt="" className="w-[23px] md:w-[34px]" />
            </button>
        </Link>
    ) : (
        <button
            className="flex items-center gap-1 bg-[#E8682B] px-8 rounded-full py-1.5 text-white text-[13px] md:text-[20px] h-[37px] md:h-[55px]"
            onClick={handleClick}
        >
            {children}
            <img src={icon} alt="" className="w-[23px] md:w-[34px]" />
        </button>
    );
};

export default PrimaryButton;
