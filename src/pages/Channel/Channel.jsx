import channelBg from "../../assets/images/channel_page.jpeg";
import channelData from "../../data/allTvChannels";
import {
  allChannelsForSearch,
  generalChannels,
  moviesAndSeries,
  regionBasedChannels,
  totalServices,
} from "../../data/offeredChannelsData";
import { useEffect, useState } from "react";
import searchIcon from "./../../assets/icons/channelsSearchIcon.png";

const Channel = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredChannels = allChannelsForSearch.filter((channel) =>
    channel.toLowerCase().includes(searchInput.toLowerCase())
  );
  // console.log(filteredChannels);
  return (
    <div className="max-w-full overflow-hidden">
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) -9.62%, rgba(0, 0, 0, 0.64) 89.34%, #000 100%)",
        }}
      >
        <img src={channelBg} alt="" className="w-full" />
      </div>

      <div className="my-10 text-center px-6 md:px-[12px] lg:px-24">
        <h1 className="text-[28px] md:text-[55px] font-[700]  uppercase leading-[43px] md:leading-[74px] mb-6 text-white">
          Available <span className="text-[#E8682B]">Channels We provide</span>
        </h1>

        {/* search  */}
        <div className="flex items-center justify-center relative max-w-[956px] mx-auto">
          <img
            className="absolute left-5 top-1/2 -translate-y-1/2 "
            src={searchIcon}
            alt="search icon"
          />
          <input
            type="text"
            className="w-full pl-14 pr-6 py-[16px] bg-[#181818] text-white focus:outline-none rounded-[15px] text-lg"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search for channels"
          />
        </div>

        {/* search result */}
        <div>
          {searchInput && (
            <div className="mt-6 bg-[#181818] text-white rounded-2xl px-5 py-6 ">
              <h1 className="text-3xl mb-4 text-[#E8682B]">Search Result</h1>
              <div className="flex gap-x-5 gap-y-2 flex-wrap">
                {filteredChannels.length > 0 ? (
                  filteredChannels.map((channel, index) => (
                    <div
                      key={index}
                      className="py-2 border-b border-gray-600 "
                    >
                      {channel}
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 text-center">No results found</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* channels */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-10 my-16">
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

        {/* offered channels */}
        <div className="mt-12 lg:mt-20">
          {/* heading */}
          <h1 className="text-[18px] md:text-[36px] lg:text-[55px] font-[500] leading-[28px] md:leading-[48px] lg:leading-[55px] mb-1 md:mb-2 lg:mb-6 text-white lg:px-16 text-center">
            WE ARE OFFERING <span className="text-[#E8682B]">16,000+</span>
            CHANNELS, <span className="text-[#E8682B]">130,000+</span> MOVIES,
            AND <span className="text-[#E8682B]">24,000+</span> TV SHOW WHICH
            CONTAIN <span className="text-[#E8682B]">330,000</span> EPISODES
          </h1>
          {/* description */}
          <p className="text-center lg:mt-5 text-white md:text-xl lg:text-[32px]">
            CHANNELS INCLUDE, BUT NOT LIMITED TO :{" "}
          </p>

          {/* 1 */}
          <div className="grid grid-cols-2 2xl:grid-cols-4 gap-x-3 gap-y-2 md:gap-y-3 mt-8 md:mt-11 lg:mt-16 text-base md:text-2xl xl:text-3xl lg:font-medium border-b-[10px] md:border-b-[14px] border-[#E8682B] pb-6 md:pb-10">
            {generalChannels.map((channel, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "text-white" : "text-[#E8682B]"}
              >
                {channel}
              </div>
            ))}
          </div>

          {/* 2 */}
          <div className="grid grid-cols-2 2xl:grid-cols-4 gap-x-3 gap-y-2 md:gap-y-1 lg:gap-y-3 mt-8 md:mt-11 lg:mt-16 text-base md:text-xl xl:text-3xl border-b-[10px] md:border-b-[14px] border-[#E8682B] pb-6 md:pb-10">
            {regionBasedChannels.map((channel, index) => (
              <div
                key={index}
                className={index % 2 === 0 ? "text-white" : "text-[#E8682B]"}
              >
                {channel}
              </div>
            ))}
          </div>

          {/* 2nd heading */}
          <h1 className="text-[18px] md:text-[32px] lg:text-[50px] font-[500] leading-[28px] md:leading-[48px] lg:leading-[55px] mt-4 lg:mt-8 text-white lg:px-16 text-center">
            <span className="text-[#E8682B]">{totalServices.countries}</span>{" "}
            COUNTRIES |{" "}
            <span className="text-[#E8682B]">{totalServices.liveChannels}</span>{" "}
            LIVE CHANNELS |{" "}
            <span className="text-[#E8682B]">{totalServices.hdMovies}</span> HD
            MOVIES |{" "}
            <span className="text-[#E8682B]">{totalServices.series}</span>{" "}
            SERIES
          </h1>

          {/* 3 */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-2 md:gap-y-3 mt-8 md:mt-11 lg:mt-16 text-base md:text-2xl xl:text-4xl  border-b-[10px] md:border-b-[14px] border-[#E8682B] pb-6 md:pb-10">
            {moviesAndSeries.map((channel, index) => (
              <div
                key={index}
                className={
                  isSmallScreen
                    ? index % 2 === 1
                      ? "text-[#E8682B]"
                      : "text-white"
                    : index % 3 === 1
                    ? "text-[#E8682B]"
                    : "text-white"
                }
              >
                {channel}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="relative">
                    <input type="text" placeholder="Search for Channels" className="w-full lg:w-[965px] h-[46px] md:h-[56px] rounded-xl bg-[#181818] text-center lg:text-[24px] "/>
                    <IoSearch className="text-[#E8682B] absolute top-3 md:top-5 left-5 md:left-[26%] text-xl"/>
                </div> */}

        {/* <div className="flex items-center justify-end gap-4 mt-8 mb-6 text-white">
                    <button className="w-[93px] h-[45px] px-4 border rounded-xl py-3 flex items-center justify-center">
                        <img src={filterIcon} alt="Filter" className="w-[36px] h-[26px]"/>
                    </button>
                    <button className="w-[93px] h-[45px] px-4  rounded-xl py-3 flex items-center justify-center md:text-[24px] bg-[#E8682B]">
                        All
                    </button>
                </div> */}

        {/* <div className="grid grid-cols-6 items-center gap-5 md:gap-10 my-8">
          {logos.map((logo) => (
            <div>
              <img src={logo} alt="" className="w-[170px]" />
            </div>
          ))}
          {logos.map((logo) => (
            <div>
              <img src={logo} alt="" className="w-[170px]" />
            </div>
          ))}
          {logos.map((logo) => (
            <div>
              <img src={logo} alt="" className="w-[170px]" />
            </div>
          ))}
          {logos.map((logo) => (
            <div>
              <img src={logo} alt="" className="w-[170px]" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Channel;
