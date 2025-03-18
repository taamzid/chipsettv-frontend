import AffiliateSection from "./components/AffiliateSection";
import AllTVSection from "./components/AllTVSection";
import ExperienceSection from "./components/ExperienceSection";
import FaqSection from "./components/FaqSection";
import HowToInstallSection from "./components/HowToInstallSection";
import MoreInformationSection from "./components/MoreInformationSection";
import MovieTrailers from "./components/MovieTrailers";
import FreeTrialSection from "./components/FreeTrialSection";
import NewFilmsSection from "./components/NewFilmsSection";
import OurPartnerSection from "./components/OurPartnerSection";
import PricingSection from "./components/PricingSection";
import TVStickSection from "./components/TVStickSection";
import Navbar from "../../components/UI/Navbar/Navbar";
import { useRef } from "react";
import WatchTvSection from "./components/WatchTvSection";

const Home = () => {
  const pricingRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div className="text-white">
      <Navbar scrollToPricing={scrollToPricing} scrollToHome={scrollToHome} />
      <div className="max-w-[1920px] mx-auto overflow-hidden">
        <div ref={homeRef}>
          <OurPartnerSection />
        </div>
        <WatchTvSection />
        <ExperienceSection />
        <AllTVSection />
        <NewFilmsSection />
        <div ref={pricingRef}>
          <PricingSection />
        </div>
        <FreeTrialSection />
        {/* <TVStickSection /> */}
        <MovieTrailers />
        <AffiliateSection />
        <HowToInstallSection />
        <FaqSection />
      </div>
      <MoreInformationSection />
    </div>
  );
};

export default Home;
