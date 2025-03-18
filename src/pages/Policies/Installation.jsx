import { useState } from "react";
import img1 from  "../../assets/images/install1.png";
import img2 from  "../../assets/images/install2.png";
import img3 from  "../../assets/images/install3.png";
import img4 from  "../../assets/images/install4.png";
import img5 from  "../../assets/images/install5.png";
import img6 from  "../../assets/images/install6.png";
import img7 from  "../../assets/images/install7.png";
import img8 from  "../../assets/images/install8.png";
import arrowIcon from "../../assets/icons/arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Installation = () => {
    const [activeTab, setActiveTab] = useState("info");
        
        const tabs = [
        { id: "fire", title: "How to Install ChipSet TV on Fire TV Stick" },
        { id: "other", title: "How to Install ChipSet TV on Other Devices"}
      ];

    return(
        <div>
            <div 
              className="w-full pt-8 text-center px-6"
              style={{background: "linear-gradient(180deg, #9C3200 9.34%, rgba(0, 0, 0, 0.00) 113.86%)"}}>
                <h1 className="text-[32px] md:text-[50px] font-[700] font-[Satoshi] uppercase leading-[43px] md:leading-[74px] text-center mb-6 text-white">how to install <span className="text-[#E8682B]">chipset tv</span></h1>
                <hr className="w-[164px] mx-auto border-[#717171]"/>
            </div>

            <div className="text-white mt-6 md:mt-12 px-6">
                <p className="hidden md:block text-[24px] text-center">
                    <span className="text-[#E8682B]">ChipsetTV</span> presents an unforgettable streaming experience to users. It allows you to access exclusive content and various live <br />channels without any pauses and breaks. Well, if you want to install <span className="text-[#E8682B]">ChipsetTV</span> on your <span className="text-[#E8682B]">Fire TV stick</span> or <span className="text-[#E8682B]">any other device</span>, keep <br />reading. This blog helps you learn the whole installation process in small steps.
                </p>
                <p className="md:hidden text-[18px] text-center">
                    <span className="text-[#E8682B]">ChipsetTV</span> presents an unforgettable streaming experience to users. It allows you to access exclusive content and various live channels without any pauses and breaks. Well, if you want to install <span className="text-[#E8682B]">ChipsetTV</span> on your <span className="text-[#E8682B]">Fire TV stick</span> or <span className="text-[#E8682B]">any other device</span>, keep reading. This blog helps you learn the whole installation process in small steps.
                </p>
                <hr className="w-[300px] md:w-[546px] mx-auto my-6 border-[#AFAFAF]"/>
            </div>

            <div className="px-6 md:px-12 lg:px-24 py-8 mx-auto">
      {/* Tabs */}

      <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          loop={false}
          className="custom-swiper flex justify-between mx-auto"
        >
          {/* Rendering Films */}
          {tabs.map((tab, i) => (
            <SwiperSlide key={i}>
              <div className="w-full">
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={` text-sm md:text-[20px] font-[700] transition-colors text-[#E8682B] pb-2 ${
                    activeTab === tab.id
                        ? "border-b " : "text-[#E8682B]"
                    }`}
                >
                    {tab.title}
                </button>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Content */}
            <div className="space-y-10 text-white mt-10 md:mt-16 px-4 md:px-8">
                <h2 className="text-[24px] md:text-[32px] font-[700] text-[#E8682B]">How to Install ChipSet TV on Fire TV Stick</h2>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 1: Enable Apps from Unknown Sources</h2>
                        <p className="my-4">The first step involves your Device settings to accept apps from other sources. To do this:</p>
                        <ol className="list-decimal ml-8">
                            <li>Find Settings on your home screen and open it.</li>
                            <li>Scroll down to My Fire TV in the Settings.</li>
                            <li>Click on the Developer option.</li>
                            <li>There, you will see an option for apps from unknown sources. Turn it on.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                </div>

                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 2: Install the Downloader App</h2>
                        <p className="my-4">Download the downloader app on your device so that it helps you download your favorite streaming application later.</p>
                        <ol className="list-decimal ml-8">
                            <li>Click on the Search icon on your home screen.</li>
                            <li>There, type “Downloader”.</li>
                            <li>Choose the Downloader app and start downloading it.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 3: Download ChipSet TV</h2>
                        <p className="my-4">Once you have a Downloader app on your device.</p>
                        <ol className="list-decimal ml-8">
                            <li>Go to the installed Downloader app. Type this URL in the available URL tab <a className="text-[#E8682B]" href="https://chipsettv.com/firestick">https://chipsettv.com/firestick</a>. </li>
                            <li>You see a “Go” option next to the APK file of ChipSet TV. Choose it to download ChipSet TV.</li>
                            <li>After downloading, install it on your device.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 4: Access ChipSet TV</h2>
                        <p className="my-4">Once the installation is complete.</p>
                        <ol className="list-decimal ml-8">
                            <li>Go to your home screen to check the icon of the ChipSet TV application.</li>
                            <li>Click on the app. Add your credentials and start watching your favorite series.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                    </div>
                </div>

            </div>
            <div className="space-y-10 text-white mt-10 md:mt-16 px-4 md:px-8">
                <h2 className="text-[24px] md:text-[32px] font-[700] text-[#E8682B]">How to Install ChipSet TV on Other Devices</h2>
                <p className="text-[18px] md:text-[24px]">If you want to download the ChipSet TV app on other devices like smart TVs, Android boxes, and smartphones, <span className="text-[#E8682B]">follow these steps.</span></p>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 1: Download the ChipSet TV App</h2>
                        <p className="my-4">In these devices, you can get the APK file of ChipSet TV from any browser of your device:</p>
                        <ol className="list-decimal ml-8">
                            <li>Go to your device’s browser. Type this URL: <a className="text-[#E8682B]" href="https://chipsettv.com/download">https://chipsettv.com/download</a> and search for the APK file.</li>
                            <li>Download the file on your smart device.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                    </div>
                </div>

                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 2: Enable Unknown Sources</h2>
                        <p className="my-4">Before installing the ChipSet TV app, make sure your device accepts the apps from unknown sources. To see the status:</p>
                        <ol className="list-decimal ml-8">
                            <li>Open your Settings.</li>
                            <li>Go to Privacy or Security.</li>
                            <li>Turn on “Unknown sources” to install the app.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img6} alt="" />
                    </div>
                </div>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 3: Install ChipSet TV</h2>
                        <p className="my-4">To install the APK file of ChipSet TV:</p>
                        <ol className="list-decimal ml-8">
                            <li>Go to your downloads folder.  Find the APK file.</li>
                            <li>Select the file and tap on Install to install it on your device.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img7} alt="" />
                    </div>
                </div>
                <div className="grid flex-col-1 md:grid-cols-[8fr,4fr] items-center gap-8 md:gap-16 my-12 md:my-16 text-[16px] md:text-[20px] font-[400]">
                    <div>
                        <h2 className="text-[20px] md:text-[24px] font-[700]">Step 4: Launch ChipSet TV</h2>
                        <p className="my-4">Once you have installed the application:</p>
                        <ol className="list-decimal ml-8">
                            <li>Go to the home screen, find the ChipSet TV app, and open it.</li>
                            <li>Log into your account with your credentials and enjoy watching.</li>
                        </ol>
                    </div>
                    <div>
                        <img src={img8} alt="" />
                    </div>
                </div>

            </div>
            </div>

            <div className="mx-6 md:mx-12 lg:mx-24 text-white">
                <h2 className="text-[#E8682B] text-[24px] md:text-[32px] font-[700] ">Conclusion</h2>
                <p className="text-[18px] md:text-[24px] font-[500] my-8">
                    If you are struggling and want to learn how to install the ChipSet TV application on your devices, follow all the above-mentioned steps. These simple steps help you navigate the settings and the whole downloading process easily. Now, download your favorite streaming app easily without any hurdles and enjoy the show.
                </p>

                <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
                    <div>
                        <h2 className="text-[#E8682B] text-[24px] md:text-[32px] font-[700] my-8">Can’t Find Us? Use VPN</h2>
                        <p className="text-[18px] md:text-[24px] font-[500]  hidden md:block">
                            If you are struggling and want to learn how to install the <br />ChipSet TV application on your devices, follow all the <br />above-mentioned steps. These simple steps help you <br />navigate the settings and the whole downloading <br />process easily. Now, download your favorite streaming <br />app easily without any hurdles and enjoy the show.
                        </p>
                        <p className="md:hidden text-[18px] md:text-[24px] font-[500] ">
                            If you are struggling and want to learn how to install the ChipSet TV application on your devices, follow all the above-mentioned steps. These simple steps help you navigate the settings and the whole downloading process easily. Now, download your favorite streaming app easily without any hurdles and enjoy the show.
                        </p>

                        <div className="my-8 flex items-center gap-3 md:gap-8 text-[16px] md:text-[20px]">
                            <button className="bg-[#E8682B] w-full md:w-[230px] h-[55px] flex items-center justify-center rounded-full gap-1 md:gap-3 ">
                                <span>Link 01</span>
                                <img src={arrowIcon} alt="" className="w-[24px] md:w-[34px]"/>
                            </button>
                            <button className="bg-[#E8682B] w-full md:w-[230px] h-[55px] flex items-center justify-center rounded-full gap-1 md:gap-3 ">
                                <span>Link 02</span>
                                <img src={arrowIcon} alt="" className="w-[24px] md:w-[34px]"/>
                            </button>
                            <button className="bg-[#E8682B] w-full md:w-[230px] h-[55px] flex items-center justify-center rounded-full gap-1 md:gap-3 ">
                                <span>Link 03</span>
                                <img src={arrowIcon} alt="" className="w-[24px] md:w-[34px]"/>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={img8} alt="" className="md:w-[547px] h-[298px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Installation;