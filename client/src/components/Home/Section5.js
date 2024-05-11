import React from "react";
import { useTheme } from "../../utils/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Section5() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen py-10 px-4">
      <img
        src="/b1 (1).png"
        alt="section5"
        className="max-w-[95%]: sm:max-w-[80%] absolute bottom-0 left-0 rotate-180 z-1 "
      />
      <div className="flex items-center justify-center z-10 relative">
        <img
          src="/5.png"
          alt="section5"
          className="max-w-[95%]: sm:max-w-[80%]"
        />
      </div>
      <div className="flex items-center flex-row  gap-4 mt-6">
        <div className=" w-[0%]   sm:w-[30%] md:w-[50%]"></div>
        <div className="flex flex-col   gap-6 z-10 relative ">
          <h2
            className={` text-2xl sm:text-4xl font-semibold ${
              theme === "dark" ? "text-white" : "text-black"
            }  `}
          >
            As a tailiaring service we take some special order for covering the
            events and cultural function.
          </h2>
          <p
            className={`text-[16] ${
              theme === "dark" ? " text-gray-200" : "text-gray-700"
            }`}
          >
            Discover the heritage of Robbito, where classic elegance meets
            contemporary flair. Our about section is a testament to our
            dedication, adorned with symbols reflecting our passion for the art
            of tailoring.
          </p>
          <p
            className={`text-[16] mt-2 ${
              theme === "dark" ? " text-gray-200" : "text-gray-700"
            }`}
          >
            <b>Explore the heritage:</b> Learn about the journey of Robbito,
            represented by the iconic scissors, a symbol of our commitment to
            craftsmanship. <br /> <b>Bespoke process:</b> Dive into our bespoke
            process, where every stitch is a manifestation of creativity and
            attention to detail. <br /> <b>Emblematic logo:</b> Uncover the
            story behind our emblematic logo, a fusion of tradition and
            innovation that defines our brand identity.
          </p>
          <p
            className={`text-[16] mt-2 ${
              theme === "dark" ? " text-gray-200" : "text-gray-700"
            }`}
          >
            Discover the heritage of Robbito, where classic elegance meets
            contemporary flair. Our about section is a testament to our
            dedication, adorned with symbols reflecting our passion for the art
            of tailoring.
          </p>
          <div className="">
            <button className="btn" onClick={() => navigate("/contact")}>
              {" "}
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
