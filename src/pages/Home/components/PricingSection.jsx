import { FaCheckCircle } from "react-icons/fa";
import arrowIcon from "../../../assets/icons/arrow.png";
import vector from "../../../assets/images/Vector.png";
import vector1 from "../../../assets/images/Vector1.png";
import popular from "../../../assets/images/popular.png";

const PricingSection = () => {
  return (
    <div
      className="flex flex-col my-16 md:my-20 items-center mb-6 mx-6 md:mx-0 md:px-10"
      id="pricingSection"
    >
      <h1
        className="text-[32px] md:text-[55px] font-[700]  text-center uppercase"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        OUR <span className="text-[#E8682B]">Pricing</span>
      </h1>

      <div className="my-10 2xl:my-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-center gap-4 md:gap-6 w-full">
        {/* 1 */}
        <div className="h-[450px] md:h-[670px] lg:h-[645px] border rounded-2xl relative">
          <div className="h-[35px] md:h-[60px] w-full bg-white rounded-t-2xl"></div>

          <h1
            className="uppercase text-[22px] md:text-[40px] font-[700] text-center my-4"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Package 1
          </h1>
          <p className="text-center text-[14px] px-5 font-inter">
            Month-to-Month, Recurring payment $29.99 <br />1 Month Subscription
          </p>
          <div className="absolute right-8 md:right-6 lg:right-8 top-[130px] md:top-44">
            <img src={vector} alt="" className="h-[28px] md:h-[58px]" />
          </div>
          <div className="flex items-start justify-center my-2 md:my-5 gap-3">
            <h1 className="text-[30px] md:text-[55px] font-[900]">$29.99</h1>
            <p className="text-[15px] font-[500] mt-3 ">/Month</p>
          </div>

          <div className="px-3 md:px-6">
            <hr />
            <div className="py-6 px-2">
              <ul className="space-y-1 md:space-y-4 font-inter text-gray-50">
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    16,000 Local & Premium Channels
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    NFL, NBA, Soccer, NHL, MLB Passes
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    5 TV Connections Included
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    130,000 Movies On-Demand
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    Plus Latin & International Content
                  </span>
                </li>
                {/* <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    1 Month Subscription
                  </span>
                </li> */}
              </ul>
            </div>

            <a
              href="https://client.chipsettv.com/store/ip-tv-service/5-tv-connections"
              target="_blank"
            >
              <button className="w-[84%] md:w-[90%] border rounded-full h-[35px] md:h-[55px] flex items-center justify-center gap-3 mt-2 text-[14px] md:text-[20px] absolute bottom-6 md:bottom-8 ">
                Get Started
                <img src={arrowIcon} alt="" className="w-[21px] md:w-[38px]" />
              </button>
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="h-[450px] md:h-[670px] lg:h-[645px] 2xl:h-[741px]  bg-gradient-to-b from-[#3A1503] to-[#E8682B] rounded-2xl relative p-[1px]">
          <div className="h-full w-full bg-black rounded-2xl">
            <div
              className="h-[35px] md:h-[60px] w-full rounded-t-2xl "
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(95deg, #9C3200 -11.22%, #E8682B 103.57%)",
              }}
            ></div>
            <img
              src={popular}
              alt=""
              className="absolute right-2 top-[45px] md:top-[70px] w-[90px] md:w-[100px] h-[26px] md:h-[32px]"
            />
            <h1
              className="uppercase text-[22px] md:text-[40px] font-[700] text-center my-4"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Package 2
            </h1>
            <p className="text-center text-[14px] px-5 font-inter">
              3 Months Subscription. One time payment $79.50{" "}
            </p>
            <div className="absolute right-8 md:right-6 lg:right-8 top-[130px] md:top-44">
              <img src={vector1} alt="" className="h-[28px] md:h-[58px]" />
            </div>
            <div className="flex items-start justify-center my-4 md:my-5 gap-3">
              <h1 className="text-[30px] md:text-[55px] font-[900] text-[#E8682B]">
                $26.50
              </h1>
              <p className="text-[15px] font-[500] mt-3 ">/Month</p>
            </div>

            <div className="px-3 md:px-6">
              <hr className="md:mt-10" />
              <div className="py-6 md:pt-8 md:pb-10 lg:py-10 px-2">
                <ul className="space-y-1 md:space-y-4 font-inter text-gray-50">
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl " />
                    <span className="text-[14px]">
                      16,000 Local & Premium Channels
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                      NFL, NBA, Soccer, NHL, MLB Passes
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                      5 TV Connections Included
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                      130,000 Movies On-Demand
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                      Plus Latin & International Content
                    </span>
                  </li>
                  {/* <li className="flex items-center gap-2 md:gap-4 ">
                    <FaCheckCircle className="text-[#E8682B] text-[12px] md:text-xl bg-white rounded-full" />
                    <span className="text-[14px]">
                      3 Months Subscription
                    </span>
                  </li> */}
                </ul>
              </div>

              <a
                href="https://client.chipsettv.com/store/ip-tv-service/3-month-subscription"
                target="_blank"
              >
                <button className="w-[84%] md:w-[90%] bg-[#E8682B] rounded-full h-[35px] md:h-[55px] flex items-center justify-center gap-3 mt-2 text-[14px] md:text-[20px] absolute bottom-6 md:bottom-8">
                  Get Started
                  <img
                    src={arrowIcon}
                    alt=""
                    className="w-[21px] md:w-[38px]"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="h-[450px] md:h-[670px] lg:h-[645px] border rounded-2xl relative">
          <div className="h-[35px] md:h-[60px] w-full bg-white rounded-t-2xl "></div>

          <h1
            className="uppercase font-[Satoshi] text-[22px] md:text-[40px] font-[700] text-center my-4"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Package 3
          </h1>
          <p className="text-center text-[14px] px-5 font-inter">
            6 Months Subscription. One time payment $144.96
          </p>
          <div className="absolute right-8 md:right-6 lg:right-8 top-[130px] md:top-44">
            <img src={vector} alt="" className="h-[28px] md:h-[58px]" />
          </div>
          <div className="flex items-start justify-center my-2 md:my-5 gap-3">
            <h1 className="text-[30px] md:text-[55px] font-[900] ">$24.16</h1>
            <p className="text-[15px] font-[500] mt-3 ">/Month</p>
          </div>

          <div className="px-3 md:px-6">
            <hr className="md:mt-3" />
            <div className="py-6 md:pt-7 md:pb-10 px-2">
              <ul className="space-y-1 md:space-y-4 font-inter text-gray-50">
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    16,000 Local & Premium Channels
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    NFL, NBA, Soccer, NHL, MLB Passes
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    5 TV Connections Included
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    130,000 Movies On-Demand
                  </span>
                </li>
                <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    Plus Latin & International Content
                  </span>
                </li>
                {/* <li className="flex items-center gap-2 md:gap-4 ">
                  <FaCheckCircle className="text-white text-[12px] md:text-xl" />
                  <span className="text-[14px]">
                    6 Months Subscription
                  </span>
                </li> */}
              </ul>
            </div>

            <a
              href="https://client.chipsettv.com/store/ip-tv-service/6-month-subscription"
              target="_blank"
            >
              <button className="w-[84%] md:w-[90%] border rounded-full h-[35px] md:h-[55px] flex items-center justify-center gap-3 mt-2 text-[14px] md:text-[20px] absolute bottom-6 md:bottom-8 ">
                Get Started
                <img src={arrowIcon} alt="" className="w-[21px] md:w-[38px]" />
              </button>
            </a>
          </div>
        </div>
        {/* 4 */}
        <div className="h-[450px] md:h-[670px] lg:h-[645px] 2xl:h-[741px] bg-gradient-to-b from-[#3A1503] to-[#E8682B] rounded-2xl relative p-[1px]">
          <div className="h-full w-full bg-black rounded-2xl">
            <div
              className="h-[35px] md:h-[60px] w-full rounded-t-2xl "
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(95deg, #9C3200 -11.22%, #E8682B 103.57%)",
              }}
            ></div>
            <img
              src={popular}
              alt=""
              className="absolute right-2 top-[45px] md:top-[70px] w-[90px] md:w-[100px] h-[26px] md:h-[32px]"
            />
            <h1
              className="uppercase text-[22px] md:text-[40px] font-[700] text-center my-4"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Package 4
            </h1>
            <p className="text-center text-[14px] px-5 font-inter">
              1 Year Subscription. One time payment $204{" "}
            </p>
            <div className="absolute right-8 md:right-6 lg:right-8 top-[130px] md:top-44">
              <img src={vector1} alt="" className="h-[28px] md:h-[58px]" />
            </div>
            <div className="flex items-start justify-center my-4 md:my-5 gap-3">
              <h1 className="text-[30px] md:text-[55px] font-[900] text-[#E8682B]">
                $17.00
              </h1>
              <p className="text-[15px] font-[500] mt-3 ">/Month</p>
            </div>

            <div className="px-3 md:px-6">
              <hr className="md:mt-3 lg:mt-10" />
              <div className="py-6 md:pt-7 md:pb-10 lg:py-10 px-2">
                <ul className="space-y-1 md:space-y-4 font-inter text-gray-50">
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl " />
                    <span className="text-[14px]">
                      16,000 Local & Premium Channels
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                      NFL, NBA, Soccer, NHL, MLB Passes
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                    5 TV Connections Included 
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                    130,000 Movies On-Demand 
                    </span>
                  </li>
                  <li className="flex items-center gap-2 md:gap-4 text-[14px]">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px]">
                    Plus Latin & International Content 
                    </span>
                  </li>
                  {/* <li className="flex items-center gap-2 md:gap-4 ">
                    <FaCheckCircle className="text-[#E8682B] bg-white rounded-full text-[12px] md:text-xl" />
                    <span className="text-[14px] ">
                      1 Year Subscription
                    </span>
                  </li> */}
                </ul>
              </div>

              <a
                href="https://client.chipsettv.com/store/ip-tv-service/1-year-subscription"
                target="_blank"
              >
                <button className="w-[84%] md:w-[90%] bg-[#E8682B] rounded-full h-[35px] md:h-[55px] flex items-center justify-center gap-3 mt-2 text-[14px] md:text-[20px] absolute bottom-6 md:bottom-8">
                  Get Started
                  <img
                    src={arrowIcon}
                    alt=""
                    className="w-[21px] md:w-[38px]"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
