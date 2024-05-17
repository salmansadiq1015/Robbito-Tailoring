import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./home.css";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className={`w-full min-h-[80vh] sm:min-h-[90vh]`}>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        stopOnHover={true}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={true}
      >
        {/* 1 */}
        <div className="relative" data-aos="fade-down">
          <img src="/data/home1.jpg" alt="banner" />
          {/* <div className="w-full h-full flex items-center justify-center ">
            <span className="absolute top-[-3rem] left-[-3rem] z-10 ">
              <IoMdSettings className="h-[5rem] w-[5rem] animate text-yellow-700/50" />
            </span>
            <div className="absolute top-1/2 left-1/2 transform z-30 -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 sm:bg-black/70 rounded-md shadow-md w-[20rem] sm:w-[39rem] py-4 sm:py-7 px-4 sm:px-7 flex items-center justify-center flex-col gap-5">
              <h1
                className="text-3xl sm:text-5xl font-bold text-center capitalize"
                style={{ lineHeight: 1.2 }}
              >
                High Quality Stitching & <br />
                Tailoring Services At <br /> Your DoorSteps
              </h1>
              <span className="text-center text-gray-100">
                Have fit challenges? We can stitch perfect fitting clothes for
                you!
              </span>
              <button className="btn" onClick={() => navigate("/contact")}>
                Book Appointment
              </button>
            </div>
          </div> */}
        </div>
        {/* 2 */}
        <div data-aos="fade-up">
          <img src="/data/home2.jpg" alt="banner" />
          {/* <div className="w-full h-full flex items-center justify-center ">
            <span className="absolute bottom-[-3rem] right-[-3rem] z-10 ">
              <IoMdSettings className="h-[5rem] w-[5rem] animate text-sky-800/50" />
            </span>
            <div className="absolute top-1/2 left-1/2 transform z-30 -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 sm:bg-black/70 rounded-md shadow-md w-[20rem] sm:w-[39rem] py-4 sm:py-7 px-4 sm:px-7 flex items-center justify-center flex-col gap-5">
              <h1
                className="text-3xl sm:text-4xl font-bold text-center capitalize"
                style={{ lineHeight: 1.2 }}
              >
                Your Style, Your Fit <br />– Personalized Tailoring, Right at{" "}
                <br />
                Your Fingertips!
              </h1>
              <span className="text-center text-gray-100">
                Struggling with fit? Let our skilled tailors create garments
                made just for you!
              </span>
              <button className="btn">Book Appointment</button>
            </div>
          </div> */}
        </div>
        {/* 3 */}
        <div data-aos="fade-right">
          <img src="/data/home3.jpg" alt="banner" />
          {/* <div className="w-full h-full flex items-center justify-center ">
            <span className="absolute top-[-3rem] right-[-3rem] z-10 ">
              <IoMdSettings className=" animate text-fuchsia-700/50" />
            </span>
            <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 sm:bg-black/70 rounded-md shadow-md w-[20rem] sm:w-[39rem] py-4 sm:py-7 px-4 sm:px-7 flex items-center justify-center flex-col gap-5">
              <h1
                className="text-3xl sm:text-4xl font-bold text-center capitalize"
                style={{ lineHeight: 1.2 }}
              >
                Sartorial Mastery, Doorstep Delivery <br /> – Transforming Your
                Closet, One <br />
                Stitch at a Time!
              </h1>
              <span className="text-center text-gray-100">
                Transforming fit issues into tailored triumphs – that's our
                promise!
              </span>
              <button className="btn">Book Appointment</button>
            </div>
          </div> */}
        </div>
        {/* 4 */}
        {/* <div data-aos="fade-left">
          <img src="home4.jpg" alt="banner" />
          <div className="w-full h-full flex items-center justify-center ">
            <span className="absolute bottom-[-3rem] left-[-3rem] z-10 ">
              <IoMdSettings className=" animate text-orange-700/50" />
            </span>
            <div className="absolute top-1/2 left-1/2 z-30 transform -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 sm:bg-black/70 rounded-md shadow-md w-[20rem] sm:w-[39rem] py-4 sm:py-7 px-4 sm:px-7 flex items-center justify-center flex-col gap-5">
              <h1
                className="text-3xl sm:text-4xl font-bold text-center capitalize"
                style={{ lineHeight: 1.2 }}
              >
                Revolutionize Your Wardrobe, Revolutionize Your Experience –
                Tailoring Made Convenient!
              </h1>
              <span className="text-center text-gray-100">
                Say hello to perfect fit and goodbye to fitting worries!
              </span>
              <button className="btn">Book Appointment</button>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
