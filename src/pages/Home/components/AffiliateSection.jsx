import AffiliateSignupBG from "./../../../assets/images/affiliateBg.png";
import arrowImg from "./../../../assets/icons/arrow.png";
import affiliateCardImage1 from "./../../../assets/images/AffiliateCard1.png";
import affiliateCardImage2 from "./../../../assets/images/AffiliateCard2.png";
import { useNavigate } from "react-router";

const AffiliateSection = () => {
  return (
    <div className="mx-6 md:mx-24 mb-6 mt-16 lg:mt-28 overflow-hidden">
      {/* Affiliate Signup */}
      <section>
        <AffiliateSignup />
      </section>
      {/* Affiliate posts/blog */}
      <section>
        <AffiliateCards />
      </section>
    </div>
  );
};

export default AffiliateSection;

// signup section
const AffiliateSignup = () => {
  // handle signup form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const number = form.phoneNumber.value;
    const email = form.email.value;

    const formData = {
      name,
      number,
      email,
    };
    console.log(formData);
  };

  return (
    <div
      className="relative h-auto xl:h-[500px] rounded-[24px] xl:rounded-[30px] overflow-hidden px-4 py-6 2xl:pl-[106px] 2xl:pr-[146px] lg:pt-[30px] 2xl:pt-[60px] 2xl:pb-[40px] flex flex-col xl:flex-row items-center lg:items-start lg:justify-between gap-6"
      style={{
        backgroundImage: `url(${AffiliateSignupBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-25 xl:opacity-5 z-0"></div>
      {/* description section */}
      <div className="relative z-10 w-full xl:w-1/2">
        {/* heading */}
        <h1 className="text-[32px] xl:text-[45px] font-[600] lg:font-[700] uppercase drop-shadow-2xl xl:mt-8 text-center lg:text-start">
          Join Our Affiliate Team <br className="hidden xl:block" />
          <span className="text-[#E8682B]">& Earn Extra Cash!</span>
        </h1>

        {/* description */}
        {/* note: font - inter later*/}
        <p className="leading-[30px] text-wrap mt-2 xl:mt-7 drop-shadow-sm text-center xl:text-start font-inter text-base xl:text-lg">
          If you’re looking for ways to earn extra passive cash with a reliable
          company that pays out competitive commissions, then look no further.
          Sign up today to join our affiliate program and receive fast monthly
          payouts ranging from $100 to $20,000, for marketing our subscriptions.
        </p>
      </div>
      {/* signup form section */}
      <div className="relative z-10 w-full xl:w-[520px]">
        {/* <h1 className="text-2xl lg:text-[28px] xl:text-[35px] font-bold">
          SIGN UP
        </h1> */}
        {/* form */}
        {/* <form
          className="mt-4 lg:mt-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-3.5 lg:gap-5"
          onSubmit={handleSubmit}
        >
         
          <input
            className="bg-white text-[#676767] text-[15px] lg:text-lg xl:text-xl px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full rounded-[12px] xl:rounded-[20px] outline-none flex items-center"
            placeholder="Name*"
            name="name"
            type="text"
          />

         
          <input
            className="bg-white text-[#676767] text-[15px] lg:text-lg xl:text-xl px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full rounded-[12px] xl:rounded-[20px] outline-none flex items-center"
            placeholder="Phone Number*"
            name="phoneNumber"
            type="number"
          />

   
          <input
            className="bg-white text-[#676767] text-[15px] lg:text-lg xl:text-xl px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full rounded-[12px] xl:rounded-[20px] outline-none flex items-center"
            placeholder="Email*"
            name="email"
            type="email"
          />

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center h-[38px] lg:h-[50px] rounded-full lg:rounded-[12px] xl:rounded-full lg:w-full bg-[#E8682B] hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)] transition-shadow duration-300 px-6"
            >
              <span className="mr-2 text-sm lg:text-xl">Get Started</span>
              <img src={arrowImg} alt="arrow icon" className="w-6 lg:w-9" />
            </button>
          </div>
        </form> */}
        <div className="flex items-center justify-center lg:mt-40">
          <a href="https://client.chipsettv.com/login" target="_blank">
            <button className="flex items-center justify-center h-[38px] lg:h-[50px] rounded-full lg:rounded-[12px] xl:rounded-full lg:w-full bg-[#E8682B] hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)] transition-shadow duration-300 px-6 ">
              <span className="mr-2 text-sm lg:text-xl">Get Started</span>
              <img src={arrowImg} alt="arrow icon" className="w-6 lg:w-9" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// posts / blog section

const AffiliateCards = () => {
  const affiliateCardData = [
    {
      imageUrl: affiliateCardImage1,
      title: "Join our Affiliate team",
      highlight: "& earn extra cash",
      description:
        "If you’re looking for ways to earn extra passive cash with a reliable company that pays out competitive commissions, then look no further. Sign up today to join our affiliate program and receive fast monthly payouts ranging from $100 to $20,000, for marketing our subscriptions.",
      buttonUrl: "#",
    },
    {
      imageUrl: affiliateCardImage2,
      title: "Join our Affiliate team",
      highlight: "& earn extra cash",
      description:
        "If you’re looking for ways to earn extra passive cash with a reliable company that pays out competitive commissions, then look no further. Sign up today to join our affiliate program and receive fast monthly payouts ranging from $100 to $20,000, for marketing our subscriptions.",
      buttonUrl: "#",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center mt-[60px] lg:mt-[120px] xl:mt-[140px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-[180px]">
        {affiliateCardData?.map((cardData, index) => (
          <div key={index} className="max-w-[616px] ">
            {/* img */}
            <img
              className="w-full mx-auto lg:mx-0"
              src={cardData?.imageUrl}
              alt="cardImage"
            />
            {/* heading */}
            <h1 className="text-[25px] xl:text-[45px] font-[600] lg:font-[700] uppercase drop-shadow-2xl mt-3 lg:mt-5 xl:mt-8">
              {cardData?.title} <br className="hidden xl:block" />
              <span className="text-[#E8682B]">{cardData?.highlight}</span>
            </h1>
            {/* description */}
            <p className="mt-2 lg:mt-5 xl:mt-8 text-base leading-[28px] font-inter text-gray-100">
              {cardData?.description}
            </p>

            {/* button */}
            <div className="mt-5 lg:mt-8 xl:mt-10 pb-3">
              <a href="https://client.chipsettv.com/login" target="_blank">
                {" "}
                <button
                  onClick={() => navigate(cardData?.buttonUrl)}
                  className="flex items-center justify-center h-[38px] lg:h-[45px] xl:h-[55px] rounded-full lg:w-[70%] bg-[#E8682B] hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)] transition-shadow duration-300 px-6"
                >
                  <span className="mr-2 text-sm lg:text-lg xl:text-xl">
                    Click Here
                  </span>
                  <img src={arrowImg} alt="arrow icon" className="w-6 lg:w-9" />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
