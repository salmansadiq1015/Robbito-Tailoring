import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Loader from "../utils/Loader";
import { useTheme } from "../utils/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();
  const navigate = useNavigate();

  // Get ALl Services
  const getAllService = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/service/get/services`
      );

      if (data.success) {
        setServices(data.services);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllService();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <div className="w-full min-h-screen py-4 px-4 relative overscroll-y-auto scroll pb-[8rem]">
        <div className="flex  items-start sm:items-center justify-start gap-4 sm:justify-between flex-col sm:flex-row">
          <h1 className="font-semibold text-2xl sm:text-3xl ">
            All Services Catalogs
          </h1>
        </div>
        {/* Line */}
        <div
          className={`w-full h-[2px] mt-8 ${
            theme === "dark" ? "bg-gray-600" : "bg-gray-400"
          } `}
        ></div>
        {/*  */}
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {services?.map((service, index) => (
              <div
                className={`rounded-lg shadow-md  ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                } cursor-pointer border hover:shadow-xl overflow-hidden`}
                key={service._id}
                onClick={() => navigate(`/service/detail/${service._id}`)}
              >
                <img
                  src={service?.image}
                  alt="serviceLogi"
                  className="w-full h-[15rem]"
                />
                <div className="flex flex-col gap-2 py-4 px-4 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[19px] font-semibold">
                      {service?.title}
                    </span>
                  </div>
                  <span className="">
                    {service?.shotDesc?.length > 70
                      ? service?.shotDesc?.slice(0, 70) + "..."
                      : service?.shotDesc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
