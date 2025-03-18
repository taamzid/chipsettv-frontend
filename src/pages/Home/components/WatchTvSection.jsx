import abcLogo from "./../../../assets/logos/abcLogo.png";
import foxLogo from "./../../../assets/logos/foxNewsLogo.png";
import hboLogo from "./../../../assets/logos/hboLogo.png";
import espnLogo from "./../../../assets/logos/espnLogo.png";
import watchTvImg from "./../../../assets/images/watchTv.png";

const WatchTvSection = () => {
  const logos = [abcLogo, foxLogo, hboLogo, espnLogo];
  return (
    <div className="flex flex-col md:flex-col my-6 md:my-10">
      {/* Partner Section */}
      <div className="mx-6 md:mx-12 lg:mx-32 flex flex-col xl:flex-row md:gap-8 lg:gap-10 xl:gap-[80px] 2xl:gap-[120px] items-center mb-6 md:mt-8">
        <div className="text-center xl:text-left">
          <h1
            className="text-[32px] md:text-[40px] lg:text-[55px]  font-[700] leading-[42px] md:leading-[48px] lg:leading-[65px]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            WATCH TV AT HOME OR{" "}
            <span className="text-[#E8682B]">ON YOUR PHONE!!</span>
          </h1>
          <p className=" text-sm md:text-[20px] mt-3 md:mt-4 lg:mt-6 leading-8 font-normal font-inter">
            Sign up today & get 5 TV connections for $29.99 a month or less.
            Watch Live Cable TV with Local & Premium networks. Get over 16,000
            channels, 130,000 movies and 24,000 TV shows all in 4K HD.
          </p>
        </div>

        <div
          className="w-full lg:min-w-[700px] xl:min-w-[800px] 2xl:w-[1100px] h-[230px] md:h-[450px] lg:h-[476px] bg-cover bg-top flex justify-center items-end mt-10 md:mt-0"
          style={{ backgroundImage: `url(${watchTvImg})` }}
        >
          <div className="grid grid-cols-4 w-full pb-8 place-items-center">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                className="w-[60px] md:w-[100px] lg:w-[135px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchTvSection;
