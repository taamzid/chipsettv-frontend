// import movie1 from "../../../assets/images/movie1.png";
// import movie2 from "../../../assets/images/movie2.png";
// import movie3 from "../../../assets/images/movie3.png";
import movie1 from "../../../assets/tvShows/America’sGotTalent.jpg";
import movie2 from "../../../assets/tvShows/JimmyKimmelLive.jpg";
import movie3 from "../../../assets/tvShows/ChicagoFire.jpg";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import arrowIcon from "../../../assets/icons/arrow.png";

const ExperienceSection = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="mx-6 md:mx-12 xl:mx-32 flex flex-col-reverse xl:flex-row items-center mb-6 md:gap-14 lg:gap-20  md:mt-0">
        <div className="flex gap-2 items-center xl:w-1/2 overflow-hidden">
          <img
            src={movie1}
            alt=""
            className=" h-[234px] w-1/3 md:h-[480px] lg:h-[561px] rounded object-cover object-center"
          />
          <img
            src={movie2}
            alt=""
            className=" h-[264px] w-1/3 md:h-[550px] lg:h-[650px] object-cover object-center"
          />
          <img
            src={movie3}
            alt=""
            className=" h-[234px] w-1/3 md:h-[480px] lg:h-[561px] object-cover object-center"
          />
        </div>
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1
            className="text-[32px] md:text-[50px] font-[700] uppercase leading-[43px] md:leading-[74px]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            WATCH TV <span className="text-[#E8682B]">ANYWHERE!!</span>
          </h1>
          <p className=" text-[14px] md:text-[20px] !leading-[32px] text-gray-50 mb-8 mt-4 font-inter font-normal">
            We have hundreds of kid shows available, including Nickelodeon and
            the Disney Channel. As well as 300+ Latin networks and 1000+
            international channels. Pause live TV and enjoy your favorite shows
            on your Smart TV, Tablet, Laptop, Firestick, or Smart Phone.
          </p>
          <div className="hidden xl:block">
            <PrimaryButton scrollTo="pricingSection" icon={arrowIcon}>
              Get Started
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center xl:hidden">
        <PrimaryButton scrollTo="pricingSection" icon={arrowIcon}>
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};

export default ExperienceSection;
