import emailjs from "@emailjs/browser";
import { useRef } from "react";
import arrowImg from "./../../../assets/icons/arrow.png";
import sectionBg from "./../../../assets/images/MoreInformationSectionBg.png";

const MoreInformationSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Collect checkbox values properly
    const selectedServices = formData.getAll("interestedPackages").join(", ") || "Not specified";

    // Debugging: Check if values are being captured
    console.log("Form Data:", data);

    const emailParams = {
      name: data.name || "No Name Provided",
      email: data.email || "No email",
      phoneNumber: data.phoneNumber || "No Phone Number",
      message: data.message || "No Message",
      services: selectedServices,
    };

    console.log("Sending Email with Params:", emailParams);

    emailjs
      .send(
        "service_kito3vt", // service ID
        "template_5yhdiln", // template ID
        emailParams, // data
        "-lLj0s9W14i7KtBXo" // public key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Message sent successfully!");
          // e.target.reset();
          e.target.reset();
        },
        (error) => {
          console.error("Email sending error:", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div
      className="min-h-[500px] mt-16 lg:mt-28 mb-6 overflow-hidden"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "",
      }}
    >
      <div className="max-w-[1920px] mx-auto py-6 xl:py-[60px] w-full h-full">
        <div className="mx-6 md:mx-24 flex flex-col lg:flex-row lg:justify-around lg:items-center 2xl:items-start gap-[10px] xl:gap-20">
          <h1 className="text-[32px] xl:text-[45px] 2xl:text-[55px] font-[600] lg:font-[700] uppercase drop-shadow-2xl xl:mt-8">
            Get In touch for <br className="hidden xl:block" />
            <span className="text-[#E8682B]">More Information.</span>
          </h1>

          <form
            ref={formRef}
            className="mt-4 lg:mt-5 grid grid-cols-1 gap-5 w-full xl:w-[700px]"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent text-[#DCDCDC] px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full outline-none border-b border-b-[#DCDCDC]"
              placeholder="Name*"
              name="name"
              type="text"
              required
            />

            <input
              className="bg-transparent text-[#DCDCDC] px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full outline-none border-b border-b-[#DCDCDC]"
              placeholder="Email (Optional)"
              name="email"
              type="email"
            />

            <input
              className="bg-transparent text-[#DCDCDC] px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full outline-none border-b border-b-[#DCDCDC]"
              placeholder="Phone Number*"
              name="phoneNumber"
              type="number"
              required
            />

            <textarea
              className="bg-transparent text-[#DCDCDC] px-4 lg:px-5 xl:px-7 h-[40px] lg:h-[50px] xl:h-[60px] w-full outline-none border-b border-b-[#DCDCDC] resize-none"
              placeholder="Message*"
              name="message"
              required
            />

            <div className="flex gap-2.5 lg:gap-7 flex-wrap text-[15px] lg:text-lg xl:text-xl px-4 lg:px-5 xl:px-7">
              <p className="text-[#DCDCDCCC]">I am Interested In</p>
              <div className="flex gap-x-3.5 gap-y-2 lg:gap-6 flex-wrap">
                {["package1", "package2", "package3", "package4"].map(
                  (service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2"
                    >
                      <input type="checkbox" name="interestedPackages" value={service} />
                      <span>{service.replace("package", "Package ")}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            <div className="px-4 lg:px-5 xl:px-7 flex justify-center lg:justify-normal">
              <button
                type="submit"
                className="flex items-center justify-center h-[38px] lg:h-[50px] rounded-full bg-[#E8682B] hover:shadow-[0_4px_10px_rgba(255,255,255,0.5)] transition-shadow px-6"
              >
                <span className="mr-2 text-sm lg:text-xl">Send Message</span>
                <img src={arrowImg} alt="arrow icon" className="w-6 lg:w-9" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MoreInformationSection;
