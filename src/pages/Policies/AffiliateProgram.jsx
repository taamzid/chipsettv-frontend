import arrowIcon from "../../assets/icons/arrow.png";

const AffiliateProgram = () => {
    return(
        <div>
            <div 
              className="w-full pt-8 text-center px-6"
              style={{background: "linear-gradient(180deg, #9C3200 9.34%, rgba(0, 0, 0, 0.00) 113.86%)"}}>
                <h1 className="text-[32px] md:text-[50px] font-[700] font-[Satoshi] uppercase leading-[43px] md:leading-[74px] text-center mb-6 text-white">Join our affiliate <span className="text-[#E8682B]">program</span></h1>
                <hr className="w-[164px] mx-auto border-[#717171]"/>
            </div>

            <div className="text-white mt-6 md:mt-12 px-6">
                <p className="hidden md:block text-[24px] text-center">
                    Ready to earn while promoting the best live TV and cable streaming service? Becoming a part of our affiliate team is simple and <br />rewarding. Follow the steps below to get started and start earning commissions today!
                </p>
                <p className="md:hidden text-[18px] text-center">
                    Ready to earn while promoting the best live TV and cable streaming service? Becoming a part of our affiliate team is simple and rewarding. Follow the steps below to get started and start earning commissions today!
                </p>
                <hr className="w-[300px] md:w-[546px] mx-auto my-6 border-[#AFAFAF]"/>
            </div>

            <div className="mx-6 md:mx-12 lg:mx-24 my-12 text-white">
                <div className="my-16">
                    <h2 className="text-[28px] md:text-[32px] font-[700] text-[#E8682B]">Step-by-Step Process to Become an Affiliate</h2>

                    <p className="text-[20px] md:text-[24px] font-[700] my-8">1. Register as an Affiliate</p>
                    <p className="text-[18px] md:text-[20px]">Sign up for our affiliate program by filling out a quick and easy registration form. Once approved, you’ll gain access to your affiliate dashboard where you can track your progress.</p>

                    <p className="text-[20px] md:text-[24px] font-[700] my-8">2. Generate Your Unique Affiliate Link</p>
                    <p className="text-[18px] md:text-[20px]">After registration, you’ll be given a personalized affiliate link. Share this link on your website, blog, social media, or anywhere your audience can find it.</p>

                <p className="text-[20px] md:text-[24px] font-[700] my-8">3. Start Promoting and Earning</p>
                <p className="text-[18px] md:text-[20px]">Promote our streaming service using your affiliate link. Each time someone clicks your link and subscribes or makes a purchase, you earn a commission.</p>

                <p className="text-[20px] md:text-[24px] font-[700] my-8">4. Track Your Commissions</p>
                <p className="text-[18px] md:text-[20px]">Use your affiliate dashboard to monitor your earnings, clicks, and conversions. Our real-time tracking system ensures transparency and allows you to see exactly how much you’ve earned.</p>
                </div>
                <div className="my-16">
                    <h2 className="text-[28px] md:text-[32px] font-[700] text-[#E8682B] mb-12">How Much Can You Earn?</h2>

                    <p className="text-[18px] md:text-[20px] ">Affiliates can earn generous commissions on every successful sale or subscription generated through their link. Here’s how much you can make:</p>
                    <div className="flex items-center my-8 gap-5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <p className="text-[24px] font-[700] ">Per Sale:</p>
                    </div>
                    <p className="text-[18px] md:text-[20px]">Earn up to <span className="font-[700]">X% commission</span> for every one-time purchase made through your link.</p>

                    <div className="flex items-center gap-5 my-8">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <p className="text-[24px] font-[700] ">Per Subscription</p>
                    </div>
                    <p className="text-[18px] md:text-[20px]">Earn a <span className="font-[700]">recurring commission of X%</span> for every monthly subscription referred, as long as the user remains subscribed.</p>

                    <p className="text-[18px] md:text-[20px] my-8">The more you promote, the more you earn! Whether you're a content creator, influencer, or marketer, our program offers excellent earning potential.</p>
                </div>
                <div className="my-16">
                    <h2 className="text-[28px] md:text-[32px] font-[700] text-[#E8682B] mb-12">Why Partner With Us?</h2>
                    <div className="flex items-center gap-5 my-8">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[24px] font-[700] ">High Conversion Rates:</span>
                    </div>
                    <p className="text-[18px] md:text-[20px]">Our service is popular and trusted, making it easier for you to convert leads.</p>
                    <div className="flex items-center gap-5 my-8">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[24px] font-[700] ">Real-Time Tracking:</span>
                    </div>
                    <p className="text-[18px] md:text-[20px]">Keep track of your clicks, conversions, and commissions in real-time with our advanced affiliate dashboard.</p>
                    <div className="flex items-center gap-5 my-8">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-[24px] font-[700] ">Recurring Income:</span>
                    </div>
                    <p className="text-[18px] md:text-[20px]">Earn recurring commissions for every subscription that stays active.</p>

                </div>
                <div className="my-10">
                    <h2 className="text-[28px] md:text-[32px] font-[700] text-[#E8682B]">Ready to become an affiliate and start earning? start promoting today!</h2>

                    <form className="my-6 flex flex-col gap-4">
                        <input type="text" placeholder="Name*" className="bg-[#121212] h-[70px] w-full md:w-[520px] rounded-xl placeholder:text-[20px] lg:placeholder:text-[24px] px-4 " required/>
                        <input type="text" placeholder="E mail*" className="bg-[#121212] h-[70px] w-full md:w-[520px] rounded-xl placeholder:text-[20px] lg:placeholder:text-[24px] px-4 " required/>
                        <input type="text" placeholder="Phone*" className="bg-[#121212] h-[70px] w-full md:w-[520px] rounded-xl placeholder:text-[20px] lg:placeholder:text-[24px] px-4 " required/>
                        <button className="bg-[#E8682B] w-full md:w-[520px] flex items-center gap-2 justify-center text-[18px] md:text-[20px] h-[55px] rounded-full">
                            <span>Join Now</span>
                            <img src={arrowIcon} alt="" className="w-[47px]"/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AffiliateProgram;