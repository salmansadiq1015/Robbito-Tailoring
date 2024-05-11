import React from "react";
import "./home.css";
import { FaDraftingCompass } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaObjectGroup } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { useTheme } from "../../utils/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Section6() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-[100vh] py-3 px-2 sm:px-6 mt-[3.5rem]">
      <div
        className={`section5-content flex flex-col gap-4 py-6 px-2 sm:px-6 rounded-md shadow-md ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-200 "
        }`}
        style={{
          filter: "contrast(1.1) drop-shadow(.3px .3px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 w-full ">
          <div className=" flex flex-col gap-2">
            <span className="text-lg text-yellow-700 ">
              SECURITY - RELIABILITY - INNOVATION
            </span>
            <h1
              className=" text-3xl sm:text-4xl font-bold  w-full"
              style={{ textShadow: "-1px 1px 0px #888" }}
            >
              Why Choose Robbito?
            </h1>
          </div>
          {/*  */}
          <p
            className={`text-justify text-lg  ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }  `}
          >
            Choosing Robbito means choosing excellence, passion, and
            personalized craftsmanship. Here's why discerning individuals choose
            us for their tailoring needs:
          </p>
        </div>

        {/* ----------- */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-[3rem]">
          {/* con1 */}
          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon">
              <FaDraftingCompass />
            </div>
            <h3 className="text-2xl text-center font-semibold">
              AMERICAN MEASURING TOOLS TO ENSURE PERFECT FIT
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              We use American Measuring tools to take your perfect measurements
              to give you a perfect fit.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>

          {/* con2 */}

          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon2">
              <FaUserAlt />
            </div>
            <h3 className="text-2xl text-center font-semibold">
              UNIQUE PATTREN IS MADE BASED ON YOUR BODY TYPE
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              Individual unique pattern is made for you based on your
              measurements and posture.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>
          {/* col3 */}
          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon3">
              <FaCartArrowDown />
            </div>
            <h3 className="text-2xl text-center  font-semibold">
              EASY TO PLACE FUTURE ORDERS
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              Your pattern is saved in our computerised system so that you can
              easily place orders in future and receive consistent good fit.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>
          {/* col4 */}
          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon4">
              <FaObjectGroup color="purple" size="50" />
            </div>
            <h3 className="text-2xl text-center  font-semibold">
              GERMAN FUSING IS USED TO AVOID BUBBLES ON CUFFS & COLLARS
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              We use German Fusing for softness durability . We have a state of
              the art fusing plant to avoid bubbling in collars & cuffs.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>
          {/* col5 */}
          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon5">
              <FaMarker color="yellow" size="50" />
            </div>
            <h3 className="text-2xl text-center  font-semibold">
              SINGLE NEEDLE TAILORING
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              We use high international standards of 19-20 stitches per inch (
              spi )to create smooth and durable seams.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>

          {/* col6 */}
          <div
            className={`condition1  ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            } rounded-md py-[1.5rem] px-[1rem]
            shadow-lg cursor-pointer flex flex-col gap-8 items-center justify-center box1`}
          >
            <div className="section5-icon6">
              <IoHome color="green" size="50" />
            </div>
            <h3 className="text-2xl text-center  font-semibold">
              HOME / OFFICE SERVICE
            </h3>
            <p
              className={`text-base ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              } text-justify `}
            >
              Our services are only a click or phone call away! We also provide
              our services in the comfort of your home or office.
            </p>
            <span className="w-[10rem] h-[2px] rounded-md"></span>
          </div>

          {/* ----------- */}
        </div>
        <div className="w-full flex items-center justify-center mt-6 mb-6">
          <button className="btn" onClick={() => navigate("/contact")}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}
