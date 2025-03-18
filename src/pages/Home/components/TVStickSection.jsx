import tvStick from "../../../assets/images/tvstick.png";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import arrowIcon from "../../../assets/icons/arrow.png";
import { Link } from "react-router";

const TVStickSection = () => {
  return (
    <div className="mx-6 md:mx-12 lg:mx-32 flex flex-col my-6 xl:my-20 items-center mb-6">
      <h1
        className="hidden md:block text-[32px] md:text-[50px] font-[700] uppercase leading-[43px] md:leading-[74px] text-center mb-12"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        Get your <span className="text-[#E8682B]">Fire TV Stick</span>
      </h1>
      <h1
        className="md:hidden text-[32px] md:text-[50px] font-[700] uppercase leading-[43px] md:leading-[74px] text-center mb-12"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        Get your <br />
        <span className="text-[#E8682B]">Fire TV Stick</span>
      </h1>

      <div className="flex flex-col xl:flex-row items-start justify-between my-6 gap-10">
        <div className="flex items-center justify-center w-full">
          <img
            src={tvStick}
            alt=""
            className="w-[443px] xl:w-[1080px] h-[236px] xl:h-[500px] "
          />
        </div>
        <div className="xl:w-1/2">
          <p className="text-base xl:text-[20px] leading-7 xl:leading-[40px] mb-6 text-center xl:text-right font-inter text-gray-50">
            Lorem ipsum dolor sit amet consectetur. A at nunc vestibulum eu
            ornare convallis nibh. In ut lorem pellentesque elementum fringilla
            neque Lorem ipsum dolor sit amet consectetur. A at nunc vestibulum
            eu ornare convallis nibh. In ut lorem pellentesque elementum
            fringilla neque. Lorem ipsum dolor sit amet consectetur. A at nunc
            vestibulum eu ornare convallis nibh. In ut lorem pellentesque
            elementum fringilla neque Lorem ipsum dolor sit amet consectetur. A
            at nunc vestibulum eu ornare convallis nibh. In ut lorem
            pellentesque elementum fringilla neque.{" "}
          </p>
          <div className="flex items-center  justify-center xl:justify-end">
            <Link to="/details">
              <PrimaryButton icon={arrowIcon}>Click Here</PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVStickSection;
