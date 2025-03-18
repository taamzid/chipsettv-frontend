// import foxLogo from "../../../assets/logos/fox.png";
// import nickLogo from "../../../assets/logos/nick.png";
// import gdLogo from "../../../assets/logos/gd.png";
// import tlcLogo from "../../../assets/logos/tlc.png";
// import accnLogo from "../../../assets/logos/accn.png";
// import nasaLogo from "../../../assets/logos/nasa.png";

import channelData from "../../../data/allTvChannels";

const AllTVSection = () => {
  //   const logos = [foxLogo, nickLogo, gdLogo, tlcLogo, accnLogo, nasaLogo];

  return (
    <div className="mx-6 md:mx-12 lg:mx-32 my-16  md:my-20 flex flex-col justify-center">
      <h1
        className="text-[32px] md:text-[55px] font-[700] font-[Satoshi] uppercase leading-[43px] md:leading-[74px] text-center"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        All TV You Love <span className="text-[#E8682B]">In One Place</span>
      </h1>

      {/* <div className="flex justify-center flex-wrap gap-5 md:gap-10 my-12">
        {channelData.map((channel, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#E8682B] rounded-3xl flex justify-center items-center h-[320px] w-[300px] overflow-hidden cursor-pointer"
          >
            <img src={channel.logo} alt="" className="w-[175px]" />
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-10 my-12">
        {channelData.map((channel, index) => (
          <div
            key={index}
            className="bg-[#181818] border border-[#E8682B] rounded-3xl flex justify-center items-center h-[160px] md:h-[280px] lg:h-[320px] overflow-hidden cursor-pointer relative"
          >
            <span className="absolute top-4 right-3.5 bg-[#E8682B] rounded-md px-3.5 py-0.5 font-semibold">
              {channel?.quality}
            </span>
            <img
              src={channel.logo}
              alt=""
              className="w-[100px] md:w-[150px] lg:w-[175px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTVSection;
