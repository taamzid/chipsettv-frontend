import { useState } from "react";
import DetailsSwiper from "../../components/Swiper/DetailsSwiper";
import { list } from "postcss";

const Details = () => {
  const [count, setCount] = useState(1);
  const features = [
    "Our most affordable Fire TV streaming stick – Enjoy fast streaming in Full HD. Comes with Alexa Voice Remote Lite.",
    "Great for new users – Start streaming with access to over 300,000 free movies and TV  episodes from ad-supported streaming apps like Amazon Freevee, Tubi,  Pluto TV, and more.",
    "Easy to set up, stays hidden – Plug in behind your TV, turn on the TV, and connect to the internet to get set up.",
    "Press and ask Alexa – Use your voice to easily search and launch shows across multiple apps.",
    "Endless  entertainment – Stream more than 1.5 million movies and TV episodes from Netflix, Prime Video, Disney+, Peacock, and more, plus listen to  millions of songs. Subscription fees may apply.",
    "Enjoy MGM+ on us –  Receive a 6-month subscription to MGM+, including access to thousands of Hollywood movies and Original series with your Fire TV purchase. Terms  apply.",
    "Live TV – Watch your favorite live TV, news, and sports with subscriptions to SLING TV, YouTube TV, and others. ",
  ];

  return (
    <div className="my-12 text-white mx-6 md:mx-12 lg:mx-24">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Swiper Section */}
        <div className="w-full  lg:w-[45%] flex justify-center">
          <DetailsSwiper />
        </div>

        {/* Details Section */}
        <div className="bg-[#181818] rounded-xl p-6 w-full lg:w-[55%]">
          <h2 className="text-[24px] md:text-[36px] font-[Satoshi]">
            Amazon Fire TV Stick Lite 2nd gen
          </h2>
          <h3 className="text-[20px] md:text-[32px] text-[#E8682B]">$60</h3>

          {/* Quantity & Buttons */}
          <div className="flex flex-wrap items-center gap-4 my-6 text-[20px] md:text-[28px] font-[700]">
            <button
              onClick={() => setCount(count - 1)}
              disabled={count === 1}
              className={`text-[#E8682B] bg-black w-[48px] h-[58px] md:h-[74px] rounded-xl ${
                count === 1 ? "cursor-not-allowed" : ""
              }`}
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={() => setCount(count + 1)}
              className="text-[#E8682B] bg-black w-[48px] h-[58px] md:h-[74px] rounded-xl"
            >
              +
            </button>

            {/* Action Buttons */}
            <button className="border rounded-xl w-[160px] md:w-[268px] h-[58px] md:h-[74px] border-[#E8682B]">
              ADD TO CART
            </button>
            <button className="rounded-xl w-[160px] md:w-[268px] h-[58px] md:h-[74px] bg-[#E8682B]">
              BUY NOW
            </button>
          </div>

          {/* Product Info */}
          <p className="text-[16px] md:text-[24px] mt-6">
            <span className="font-[700]">SKU:</span> 123445
          </p>
          <p className="text-[16px] md:text-[24px] mt-3">
            <span className="font-[700]">Category:</span> TV Stick
          </p>

          {/* Payment Methods */}
          <p className="text-[16px] md:text-[24px] mt-6">
            Select Payment Method
          </p>
          <div className="min-h-[120px] md:min-h-[163px] max-w-max bg-black px-4 py-4 flex items-center justify-center gap-2 md:gap-4 mt-6 rounded-xl flex-wrap">
            <div className="bg-[#181818] w-[80px] md:w-[125px] h-[80px] md:h-[125px] rounded-xl"></div>
            <div className="bg-[#181818] w-[80px] md:w-[125px] h-[80px] md:h-[125px] rounded-xl"></div>
            <div className="bg-[#181818] w-[80px] md:w-[125px] h-[80px] md:h-[125px] rounded-xl"></div>
            <div className="bg-[#181818] w-[80px] md:w-[125px] h-[80px] md:h-[125px] rounded-xl"></div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-[36px] font-[Satoshi]">Features</h2>

        <ul className="list-disc ml-8">
          {features.map((feature, i) => (
            <li key={i} className="text-[24px] leading-[65px] ">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
