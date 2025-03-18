import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import TermsConditions from "../pages/Policies/TermsConditions";
import PrivacyPolicy from "../pages/Policies/PrivacyPolicy";
import RefundPolicy from "../pages/Policies/RefundPolicy";
import ContactUs from "../pages/ContactUs/ContactUs";
import Channel from "../pages/Channel/Channel";
import Details from "../pages/Channel/Details";
import AffiliateProgram from "../pages/Policies/AffiliateProgram";
import Installation from "../pages/Policies/Installation";
import Faq from "../pages/Faq/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/channel",
        element: <Channel />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/terms&conditions",
        element: <TermsConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/affiliate-program",
        element: <AffiliateProgram />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

export default router;
